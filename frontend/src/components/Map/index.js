import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {

  containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '60vh',
    marginTop: '32px',
    borderRadius: '8px',
  }

  style = {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  }

  render() {
    return (

      <Map
        google={this.props.google}
        containerStyle={this.containerStyle}
        style={this.style}
        zoom={17}
        initialCenter={{ lat: -20.826758615, lng: -49.359639427 }}
      >
      </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    // apiKey: 'GOOGLE MAPS API KEY',
  }
))(MapContainer)