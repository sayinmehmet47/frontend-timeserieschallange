import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import TimeChart from './components/TimeChart';
const signals = require('../data/signal.json');
const assets = require('../data/assets.json');
const measurements = require('../data/measurements.csv');

//sort measurements by date
const sortedMeasurements = measurements.sort((a, b) => {
  return new Date(a.Ts) - new Date(b.Ts);
});

export default function Signals() {
  const router = useRouter();
  const { id } = router.query;
  const filteredSignals = signals.filter((e) => e.AssetId === id);
  const asset = assets.filter((e) => e.AssetID === id);
  const [signalsData, setSignalsData] = useState(
    filteredSignals.map((signal) => {
      return {
        SignalName: signal.SignalName,
        AssetId: signal.AssetId,
        SignalId: signal.SignalId,
        SignalMeasurement: sortedMeasurements
          .filter(
            (measurement) => measurement.SignalId === Number(signal.SignalId)
          )
          .map((e) => {
            return [
              new Date(e.Ts).getTime(),
              Number(e.MeasurementValue.toString().replace(',', '.')),
            ];
          }),
      };
    })
  );

  return (
    <div>
      <h2 className="text-center my-4 text-danger">{asset[0]?.description}</h2>
      <div className="row justify-content-sm-center">
        <div className="col-12 ">
          <TimeChart signals={signalsData} />
        </div>
      </div>
    </div>
  );
}
