import React from 'react';

export default class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set map location
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {

    return (
      <section className="spot-index-right-map-section">
        <div className="spot-index-right-map">
          <div id='map-container' ref={ map => this.mapNode = map }>ok</div>
        </div>
      </section>
    );
  }
}
