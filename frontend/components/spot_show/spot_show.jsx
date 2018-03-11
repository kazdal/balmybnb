import React from 'react';

export default class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    return (
      <section className="spot-show-section">
        <img src={this.props.spot_images[11].image_url} className="spot-show-slider"></img>

        <section className="spot-show-main">
            <h1 className="spot-show-header">{this.props.spot.title}</h1>
            <p>{this.props.spot.description}</p>
        </section>
      </section>
    );
  }
}
