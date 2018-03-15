import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';


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

    const slides = this.props.spot.spotImageIds.map((spot_image, idx) => {
      debugger
      
          if (this.props.spotImages) {
            debugger
            return (
              <div key={idx} className="slide-wrapper">
                <img src={this.props.spotImages[spot_image].image_url}></img>
              </div>
            );
          }
    });
    return (
      <Slider {...slickSettings}>
        { slides }
        <div className="slide-wrapper"></div>
      </Slider>
    );
  }

  render() {
    const { title, description, price, location } = this.props.spot;

    return (
      <li className="spot-index-item" onClick={this.handleClick}>
        { this.slickSlider() }
        <h2>
          { title }
        </h2>
        <p>From ${ price } per night</p>
      </li>
    );
  }
}

export default withRouter(SpotIndexItem);
