class Ideamap {
  // constructor(element, position, zoom, type, apiKey, markerDetails = [], infoWindowEvent) {
  constructor(options) {
    this.element = options.ele
    this.position = options.pos;
    this.zoom = options.zo;
    this.type = options.typ;
    this.apiKey = options.api;
    // this.setApi();
    this.infoWindowEvent = infoWindowEvent
    this.object;
    this.allMarkers = [];
    this.render();
    this.setMarker(markerDetails);
  }

  render() {
    this.object = new google.maps.Map(this.element, {
      center: this.position,
      zoom: this.zoom
    })
  }

  setApi() {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.apiKey
    head.appendChild(script);
  }

  // toggleInfoWindow() {
  //   alert('here')
  //   if (this.infoWindowEvent == 'click') {
  //     this.info.toggleInfoWindow();
  //   }
  //   else if (this.infoWindowEvent == 'mouseover') {
  //     this.allMarkers.forEach(function (marker) {
  //       marker.info.hideInfoWindow();
  //     })
  //     this.marker.info.showInfoWindow();
  //   }
  // }
  setMarker(markers) {
    if (markers) {
      markers.forEach(markerDetail => {
        let newMarker = new Marker(markerDetail.icon, markerDetail.position, markerDetail.info, this.object, this.infoWindowEvent)
        this.allMarkers.push(newMarker)
          // newMarker.object.addListener(this.infoWindowEvent, function () {
        //   this.toggleInfoWindow;
        // })
      });
    }
  }


}