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
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    this.markers[spot.id] =
      new google.maps.Marker({
        position: {lat: spot.lat, lng: spot.lng},
        map: this.map,
        title: spot.description,
        animation: google.maps.Animation.DROP,
        icon: image,
        spotId: spot.id
      });
    let marker = this.markers[spot.id];
    marker.setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
