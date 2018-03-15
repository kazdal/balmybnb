import React from 'react';
import { connect } from 'react-redux';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(address) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode( {address:address}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        // dispatch action here that hits ui reducer
        // push history with spots and it will go there based on route
      }
    });
  }

  render () {

  }

}
