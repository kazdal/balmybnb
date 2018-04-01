import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // const spotId = this.props.spot.id;
    // this.props.history.push(`/spots/${spotId}`);
  }

  slickSlider() {
    let slickSettings = {
      dots: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const slides = this.props.spot.spotImageIds.map((spotImageId, idx) => {
      if (this.props.spotImages.length !== 0) {
        return (
          <div key={spotImageId} className="slide-wrapper">
            <img src={this.props.spotImages[spotImageId].image_url} />
          </div>
        );
      }
    });
    return <Slider {...slickSettings}>{slides}</Slider>;
  }

  averageRating() {
    const spotReviews = this.props.reviews.filter(review =>
      this.props.spot.reviewIds.includes(review.id)
    );
    const reviewCount = spotReviews.length;
    let allRatings = 0;
    spotReviews.forEach(review => {
      allRatings += review.rating;
    });
    return Math.round(allRatings / reviewCount);
  }

  starCounter() {
    const averageRating = this.averageRating();
    return new Array(5).fill().map((e, i) => {
      if (i < averageRating) {
        return (
          <li key={i * this.props.spot.id}>
            <i className="material-icons">star</i>
          </li>
        );
      } else {
        return (
          <li key={i * this.props.spot.id}>
            <i className="material-icons">star_border</i>
          </li>
        );
      }
    });
  }

  render() {
    const { title, description, price, location } = this.props.spot;
    return (
      <li className="spot-index-item" onClick={this.handleClick}>
        {this.slickSlider()}
        <h2>{title}</h2>
        <p>From ${price} per night</p>
        <div className="spot-index-item-review-line">
          <ul className="spot-index-review-stars">{this.starCounter()}</ul>
          <div>{this.averageRating()}</div>
        </div>
      </li>
    );
  }
}

export default withRouter(SpotIndexItem);
