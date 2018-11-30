import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0],
    };

    console.log(process.env.GOOGLE_MAPS_API)
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }


  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.state.selectedFlat}
        />

        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
            center={this.center()}
            zoom={13}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} selectedFlat={this.state.selectedFlat}/>
          </GoogleMapReact>
        </div>

      </div>
    );
  }
}

export default App;


