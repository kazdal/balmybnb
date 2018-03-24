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
          path: 'm22,-28.38281l-44,0l0,20l16,0l6,5l6,-5l16,0l0,-20z',
          fillColor: 'white',
          fillOpacity: 1,
          scale: 1,
          strokeColor: 'black',
          labelOrigin: new google.maps.Point(0, -18),
          strokeWeight: .5,
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
