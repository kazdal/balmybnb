import React from 'react';
import BookingFormContainer from './booking_form_container';
import ReviewFormContainer from './review_form_container';
import ReviewIndexItem from './review_index_item';
import Slider from 'react-slick';


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

  render() {
    const allReviews = this.props.reviews.map((review) => {
      return <ReviewIndexItem key={ review.id } review={ review } />;
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
      const allImages = this.props.spot.spotImageIds.map((spotImageId) => {

        return (
          <div key={spotImageId} className="slide-wrapper">
            <img src={this.props.spotImages[spotImageId].image_url}></img>
          </div>
          );
        });
    }

    return (
      <section className="spot-show-section">

        {
          Object.values(this.props.spotImages).length > 1 &&
              <img className="spot-show-slider" src={this.props.spotImages[this.props.spot.spotImageIds[0]].image_url}>
              </img>
        }

        <section className="spot-show-main">
          <div className="spot-show-words">
            <h1 className="spot-show-header">{this.props.spot ? this.props.spot.title : ""}</h1>
            <p>{this.props.spot ? this.props.spot.description : ""}</p>

            <ul className="review-index">
              <h2>{ this.props.reviews.length } Reviews</h2>
              { allReviews }
            </ul>
            { this.props.currentUser && <ReviewFormContainer /> }
          </div>
          <BookingFormContainer spot={ this.props.spot ? this.props.spot : "" }/>
        </section>
      </section>
    );
  }
}


// {
//   Object.values(this.props.spotImages).length > 1 &&
//   <Slider {...slickSettings}>
//     { this.allImages }
//     <div key={1} className="slide-wrapper">
//       <img className="spot-show-slider" src={this.props.spotImages[1].image_url}></img>
//     </div>
//     <div key={2} className="slide-wrapper">
//       <img src={this.props.spotImages[1].image_url}></img>
//     </div>
//   </Slider>
// }
