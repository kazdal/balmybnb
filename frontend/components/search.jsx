import React from 'react';

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
        this.props.history.push(`/homes?lat=${lat}&lng=${lng}`);
      }
    });
  }

  render () {

  }

}
