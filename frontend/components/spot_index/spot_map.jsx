import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set map location
    const mapOptions = {
      center: { lat: 34.019956, lng: -118.824270 },
      zoom: 9
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  componentWillUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {
    return (
      <section className="spot-index-right-map-section">
        <div className="spot-index-right-map">
          <div id='map-container' ref={ map => this.mapNode = map }></div>
        </div>
      </section>
    );
  }
}
