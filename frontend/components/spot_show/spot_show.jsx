import React from 'react';
import BookingFormContainer from './booking_form_container';

export default class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    this.props.fetchSpotImages();
  }

  render() {
    return (
      <section className="spot-show-section">

        {
          this.props.spot_images === {} &&
          <img src={this.props.spot_images[11].image_url} className="spot-show-slider"></img>
        }


        <section className="spot-show-main">
          <div className="spot-show-words">
            <h1 className="spot-show-header">{this.props.spot ? this.props.spot.title : ""}</h1>
            <p>{this.props.spot ? this.props.spot.description : ""}</p>
          </div>
          <BookingFormContainer spot={ this.props.spot ? this.props.spot : "" }/>
        </section>
      </section>
    );
  }
}
