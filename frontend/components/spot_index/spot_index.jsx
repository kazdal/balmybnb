import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpotImages();
  }
  //
  // reverseGeocode () {
  //   let lat = this.props.coordinates[0];
  //   let lng = this.props.coordinates[1];
  //   let latlng = new google.maps.Lat.Lng(lat, lng);
  //   let geocoder = new google.maps.Geocoder();
  //   geocoder.geocode( { 'latLng': latlng }, (results, status) => {
  //     if (state === google.maps.GeocoderStatus.OK) {
  //       console.log(results);
  //       debugger
  //       let address = results;
  //     }
  //   });
  //
  // }


  render() {

    const allImages = this.props.spotImages;
    const allSpots = this.props.spots.map((spot) => {
        return <Link key={ spot.id } to={`/spots/${spot.id}`}><SpotIndexItem key={ spot.id } spot={ spot } spotImages={ this.props.spotImages } ></SpotIndexItem></Link>;
    });

    const spotCount = this.props.spots.filter(obj => obj !== undefined).length;

    return (
        <section className="spot-index-left-items">
          <div className="spot-index-header">
            <h1><CountUp useEasing={true} start={0} end={spotCount} duration={2} /> balmybnb homes in Los Angeles</h1>
            <p>Explore homes verified for quality & comfort in cities around the world</p>
          </div>
          <ul>
            { allSpots }
          </ul>
        </section>
    );
  }
}
