export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot.id] = spot);

    spots
      .filter(spot => !this.markers[spot.id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot));

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));
  }

  createMarkerFromSpot(spot) {
    const mapIcon = {
          path: 'M22-48h-44v43h16l6 5 6-5h16z',
          fillColor: 'white',
          fillOpacity: 1,
          scale: 1,
          strokeColor: 'white',
          labelOrigin: new google.maps.Point(0, -25),
          strokeWeight: 0
        };

    this.markers[spot.id] =
      new google.maps.Marker({
        position: {lat: spot.lat, lng: spot.lng},
        map: this.map,
        title: spot.description,
        spotId: spot.id,
        label: "$" + String(spot.price),
        icon: mapIcon
      });
    let marker = this.markers[spot.id];
    marker.setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
