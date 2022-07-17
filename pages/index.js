import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

const assets = require('../data/assets.json');
export default function Home() {
  const handleClick = (data) => {
    Router.push(
      `https://www.google.com/maps/search/?api=1&query=${data.Latitude},${data.Longitude} `
    );
  };

  const handleSignal = (asset) => {
    Router.push(`/${asset.AssetID}`);
  };

  return (
    <div>
      <h1 className="text-center mt-3">ASSETS</h1>
      <div className="row card-group">
        {assets.map((asset) => (
          <div className="col-sm-4 g-5" key={asset.AssetID}>
            <Card>
              <CardBody>
                <CardTitle className="text-success">
                  <h4>{asset.description}</h4>
                </CardTitle>
                <CardText>Longitude:{asset.Longitude}</CardText>
                <CardText>Latitude:{asset.Latitude}</CardText>
                <div className="d-flex justify-content-between">
                  <Button
                    onClick={() =>
                      handleClick({
                        Latitude: asset.Latitude,
                        Longitude: asset.Longitude,
                      })
                    }
                  >
                    View on Map 🗺
                  </Button>
                  <Button
                    onClick={() => handleSignal(asset)}
                    className="btn-danger"
                  >
                    View Signals 📡
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}
