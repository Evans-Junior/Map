import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 40.730610,
        lng: -73.935242
    }
  }
  };

  handleChange = address => {
    this.setState({address})
  };

  handleSelect =address => {
    geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(LatLng => 
      {
        console.log('Success',LatLng);
        this.setState({address});
        this.setState({mapCenter: LatLng});
      })
    .catch(error => console.error('Error',error));
  }
 
 
  render() {
    return (
      <div id="googleMap">

      <PlacesAutocomplete
      value={this.state.address}
      onChange={this.handleChange}
      onSelect={this.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>


      <Map 
      google={this.props.google}
      initialCenter={{
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
      }}

      center={{
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
      }}
      >

        <Marker 
        position={{
          lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
        }}/>
 </Map>
      
      </div>
      
    )
  }
}
 // {/*Api is not working*/}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDrFS-vVOkXPBMWef9zsXg8PQ3KfphkZoU')
})(MapContainer)