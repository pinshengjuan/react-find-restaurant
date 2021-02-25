import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={
          {
            lat: 24.150874,
            lng: 120.646675
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '__KEY__'
})(MapContainer);