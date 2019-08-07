class Ideamap {
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
    var ideaMap = this;
    script.onload = function () {
      ideaMap.render();
      ideaMap.setMarker(ideaMap.markerDetails);
    }
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.apiKey
    head.insertBefore(script, head.firstChild);
  }

  setMarker(markers) {
    if (markers) {
      markers.forEach(markerDetail => {
        let newMarker = new Marker(markerDetail.icon, markerDetail.position, markerDetail.info, this.object, this.infoWindowEvent)
        this.allMarkers.push(newMarker)
      });
    }
  }


}