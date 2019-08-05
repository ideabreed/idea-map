class Infowindow {
  constructor(contentString, map, marker) {
    this.marker = marker
    this.map = map
    this.contentString = contentString;
    this.infoWindow = new google.maps.InfoWindow({
      content: contentString,
      opened: false
    });
  }
  showInfoWindow() {
    this.infoWindow.open(this.map, this.marker);
    this.infoWindow.opened = true;
  }
  hideInfoWindow() {
    this.infoWindow.close();
    this.infoWindow.opened = false;
  }
  toggleInfoWindow(windowEvent) {
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
