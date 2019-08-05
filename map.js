class Map {
  constructor(element, position, zoom, type, apiKey, markerDetails = []) {
    this.element = element
    this.position = new google.maps.LatLng(position.lat, position.long);
    this.zoom = zoom;
    this.type = type;
    this.apiKey = apiKey;
    this.setApi(markerDetails);
    this.setMarker();
    this.map = this.render();
  }

  render() {
    console.log('here');
    let map = new google.maps.Map(element, {
      center: this.position,
      zoom: this.zoom
    })
  }

  setApi() {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    // script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.apiKey
    // head.appendChild(script);
  }

  setMarker(markers) {
    if (markers) {
      markers.forEach(markerDetail => {
        Marker.new(markerDetail.icon, markerDetail.position, markerDetail.info, this.map)
      });
    }
  }

}