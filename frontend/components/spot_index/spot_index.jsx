import React from "react";
import SpotIndexItem from "./spot_index_item";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchSpotImages();
    this.props.fetchReviews();
  }

  // componentWillUpdate(nextProps) {
  //   this.reverseGeocode(nextProps.coordinates);
  // }

  // reverseGeocode() {
  //   let lat = this.props.coordinates[0];
  //   let lng = this.props.coordinates[1];
  //   let latlng = new google.maps.LatLng(lat, lng);
  //   let geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ latLng: latlng }, (results, status) => {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       this.place =
  //         results[0].address_components[4].long_name ||
  //         results[2].address_components[0].long_name ||
  //         results[0].address_components[4].short_name;
  //     }
  //   });
  // }

  // geocoder.geocode({ address: this.state.address }, (results, status) => {
  //   if (status === google.maps.GeocoderStatus.OK) {
  //     const lat = results[0].geometry.location.lat();
  //     const lng = results[0].geometry.location.lng();
  //     if (this.props.location.pathname !== "/spots") {
  //       this.props.history.push("/spots");
  //     }
  //     // dispatch action here that hits ui reducer
  //     // push history with spots and it will go there based on route
  //   }
  // });

  render() {
    const allImages = this.props.spotImages;
    const allSpots = this.props.spots.map(spot => {
      return (
        <Link key={spot.id} to={`/spots/${spot.id}`}>
          <SpotIndexItem
            key={spot.id}
            spot={spot}
            spotImages={allImages}
            reviews={this.props.reviews}
          />
        </Link>
      );
    });
    // balmybnb homes in {this.place}
    const spotCount = this.props.spots.filter(obj => obj !== undefined).length;

    return (
      <section className="spot-index-left-items">
        <div className="spot-index-header">
          <h1>
            <CountUp useEasing={true} start={0} end={spotCount} duration={2} />{" "}
            balmybnb homes
          </h1>
          <p>
            Explore homes verified for quality & comfort in cities around the
            world
          </p>
        </div>
        <ul>{allSpots}</ul>
      </section>
    );
  }
}
