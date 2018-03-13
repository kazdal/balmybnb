export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    console.log('time to update');
    spots.forEach((spot) => {
      if (this.markers.keys === undefined) {
        this.createMarkerFromSpot(spot);
      } else if (!this.markers.keys.includes(spot.id)) {
        this.createMarkerFromSpot(spot);
      }

    });
  }

  createMarkerFromSpot(spot) {
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    this.markers[spot.id] =
      new google.maps.Marker({
        position: {lat: spot.lat, lng: spot.lng},
        map: this.map,
        title: spot.description,
        animation: google.maps.Animation.DROP,
        icon: image
      });
      let marker = this.markers[spot.id];
      marker.setMap(this.map);
  }
}
