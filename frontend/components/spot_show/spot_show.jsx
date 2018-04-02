import React from "react";
import BookingFormContainer from "./booking_form_container";
import ReviewFormContainer from "./review_form_container";
import ReviewIndexItem from "./review_index_item";
import Slider from "react-slick";

export default class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  averageRating() {
    const reviewCount = this.props.reviews.length;
    let allRatings = 0;
    this.props.reviews.forEach(review => (allRatings += review.rating));
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
    const allReviews = this.props.reviews.map(review => {
      return <ReviewIndexItem key={review.id} review={review} />;
    });

    let slickSettings = {
      centerMode: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "spot-show-slider"
    };

    if (this.props.spot !== undefined) {
      this.allImages = this.props.spot.spotImageIds.map(spotImageId => {
        return (
          <div key={spotImageId} className="slide-wrapper">
            <img src={this.props.spotImages[spotImageId].image_url} />
          </div>
        );
      });
    }

    return (
      <section className="spot-show-section">
        {
          Object.values(this.props.spotImages).length > 1 &&
          <Slider {...slickSettings}>
            { this.allImages }
          </Slider>
        }
        <section className="spot-show-main">
          <div className="spot-show-words">
            <h1 className="spot-show-header">
              {this.props.spot ? this.props.spot.title : ""}
            </h1>
            <p>{this.props.spot ? this.props.spot.description : ""}</p>

            <ul className="review-index">
              <h2>
                {this.props.reviews.length} Reviews
                <ul className="review-index-average">
                  {this.props.reviews.length > 1 && this.starCounter()}
                </ul>
              </h2>
              {allReviews}
            </ul>
            {this.props.currentUser && <ReviewFormContainer />}
          </div>
          <BookingFormContainer spot={this.props.spot ? this.props.spot : ""} />
        </section>
      </section>
    );
  }
}

// {Object.values(this.props.spotImages).length > 1 && (
//   <img
//     className="spot-show-slider"
//     src={
//       this.props.spotImages[this.props.spot.spotImageIds[0]].image_url
//     }
//   />
// )}
