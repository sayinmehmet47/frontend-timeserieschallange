import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import highChartExportCSV from 'highcharts-export-csv';
import GridLight from 'highcharts/themes/grid-light';
import highchartsAccessibility from 'highcharts/modules/accessibility';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  highChartExportCSV(Highcharts);
  GridLight(Highcharts);
  highchartsAccessibility(Highcharts);
}
export default function TimeChart({ signals }) {
  console.log(signals);
  const series = [
    signals?.map((signal) => {
      return {
        type: 'area',
        name: signal?.SignalName,
        data: signal?.SignalMeasurement || [],
      };
    }),
  ];

  const options = {
    title: {
      text: "Signal's measurements",
    },

    chart: {
      zoomType: 'x',
    },
    xAxis: {
      type: 'datetime',
      tickmarkPlacement: 'on',
      title: {
        enabled: false,

        text: 'Time',
      },
    },
    yAxis: {
      title: {
        text: 'Measurement Value',
      },
    },

    plotOptions: {
      area: {
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },

        threshold: null,
      },
    },
    series: series[0],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
