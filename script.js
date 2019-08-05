class Ideamap {
  constructor(element, position, zoom, type, apiKey, markerDetails = []) {
    this.element = element
    this.position = position;
    this.zoom = zoom;
    this.type = type;
    this.apiKey = apiKey;
    this.object;
    // this.setApi();
    this.render();
    this.setMarker(markerDetails);
  }

  render() {
    console.log('here');
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

  setMarker(markers) {
    if (markers) {
      markers.forEach(markerDetail => {
        console.log(this.object)
        let newMarker = new Marker(markerDetail.icon, markerDetail.position, markerDetail.info, this.object)
        newMarker.render()
      });
    }
  }

}


class Marker {
  constructor(iconUrl = "", position, info, map) {
    this.map = map;
    this.iconUrl = iconUrl;
    this.position = new google.maps.LatLng(position.lat, position.lng);
    this.object;
    this.render();
    this.info = new Infowindow(info, map, this.object);
  }

  render() {
    this.object = new google.maps.Marker({
      position: this.position,
      map: this.map,
      icon: {
        url: this.iconUrl
      }
    });
    this.object.addListener('click', () => {
      this.onClick();
    })
  }

  show() {
    this.object.setVisible(true);
  }

  hide() {
    this.object.setVisible(false);
  }

  onClick() {
    this.info.toggleInfoWindow();
  }

  onHover() {
    this.object.addListener('hover', () => {
    })
  }

}



class Infowindow {
  constructor(contentString, map, marker) {
    this.marker = marker
    this.map = map
    this.contentString = contentString;
    this.infoWindow = new google.maps.InfoWindow({
      content: contentString,
      opened: false
    });
    // this.infoWindow.prototype.opened = false;
    // this.showInfoWindow();
  }
  showInfoWindow() {
    this.infoWindow.open(this.map, this.marker);
  }
  hideInfoWindow() {
    this.infoWindow.close();
  }
  toggleInfoWindow() {
    console.log(this.infoWindow)
    if (this.infoWindow.opened) {
      this.hideInfoWindow();
      this.infoWindow.opened = false;
    }
    else {
      this.showInfoWindow();
      this.infoWindow.opened = true;
    }
  }
}

var apiKey = "AIzaSyCJBeRKLO65KJR25Zb3HCmPoT1vP4MLX6I";
var element = document.querySelector('.map-container');
var position = { lat: 28.3949, lng: 84.1240 };
var zoom = 6;
var type = "google";
var infoWindowMarkup = "<h4>hello</h4>"
var markerDetails = [{ icon: "http://maps.google.com/mapfiles/ms/icons/blue.png", position: { lat: 28.26689, lng: 83.9685 }, info: infoWindowMarkup },
{ icon: "http://maps.google.com/mapfiles/ms/icons/blue.png", position: { lat: 27.4368, lng: 85.0026 }, info: infoWindowMarkup }]
map = new Ideamap(element, position, zoom, type, apiKey, markerDetails)
