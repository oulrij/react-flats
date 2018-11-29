import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center() {
    return {
      lat: 48.884211,
      lng: 2.34689
      // lat: this.state.selectedFlat.lat,
      // lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBwvzwpwAxHFlFC79wPzznw_9zbFYnawyk' }}
            center={this.center()}
            zoom={12}>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;


