import { Map, Marker } from "pigeon-maps";

const MapComponent = () => {
  return <Map height={300} defaultCenter={[44.29247867816909, -76.41149688806082]} defaultZoom={16}>
    <Marker width={50} anchor={[44.29247867816909, -76.41149688806082]} />
  </Map>;
};

export default MapComponent;