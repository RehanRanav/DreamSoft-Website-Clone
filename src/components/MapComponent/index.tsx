import { Component, ReactNode } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const key = import.meta.env.REACT_APP_GOOGLE_MAP_API_KEY as string;
class MapContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        initialCenter={{
          lat: 23.014509,
          lng: 72.591759,
        }}
      ></Map>
    );
  }
}

const MapComponent = GoogleApiWrapper({
  apiKey: key,
})(MapContainer);

export default MapComponent;
