import React from "react";
import MarkerManager from "../../util/marker_manager";

export default class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.lat = this.props.coordinates[0];
    this.lng = this.props.coordinates[1];
  }

  // lat: 34.019956, lng: -118.824270

  componentDidMount() {
    // set map location
    const mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 10
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);

    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter("bounds", bounds);
      // const center = this.map.getCenter();
      // this.props.receiveCoordinates(center.lat(), center.lng());
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.coordinates !== nextProps.coordinates) {
      const mapOptions = {
        center: {
          lat: nextProps.coordinates[0],
          lng: nextProps.coordinates[1] },
        zoom: 10
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(this.props.spots);

      google.maps.event.addListener(this.map, "idle", () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west }
        };
        this.props.updateFilter("bounds", bounds);

        // const center = this.map.getCenter();
        // this.props.receiveCoordinates(center.lat(), center.lng());
      });
    }
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
          <div id="map-container" ref={map => (this.mapNode = map)} />
        </div>
      </section>
    );
  }
}
