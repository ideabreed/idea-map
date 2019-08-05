class Ideamap {
  // constructor(element, position, zoom, type, apiKey, markerDetails = [], infoWindowEvent) {
  constructor(options) {
    this.element = options.ele
    this.position = options.pos;
    this.zoom = options.zo;
    this.type = options.typ;
    this.apiKey = options.api;
    this.markerDetails = options.mrk;
    this.infoWindowEvent = options.infoEv;
    this.allMarkers = [];
    this.setApi();
  }

  render() {
    this.object = new google.maps.Map(this.element, {
      center: this.position,
      zoom: this.zoom
    })
  }

  setApi() {
    let head = document.getElementsByTagName('body')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    // script.defer = true;
    var ideaMap = this;
    script.onload = function () {
      // this.render();
      ideaMap.render();
      ideaMap.setMarker(ideaMap.markerDetails);
    }
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.apiKey
    head.insertBefore(script, head.firstChild);
  }

  reset() {

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