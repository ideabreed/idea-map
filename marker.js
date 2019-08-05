class Marker {
  constructor(iconUrl = "", position, info, map, infoWindowEvent) {
    this.map = map;
    this.iconUrl = iconUrl;
    this.position = new google.maps.LatLng(position.lat, position.lng);
    this.infoWindowEvent = infoWindowEvent
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
    var windowEvent = this.infoWindowEvent
    if (this.infoWindowEvent == 'mouseover') {
      this.object.addListener('mouseout', () => {
        this.info.hideInfoWindow();
      })
    }
    this.object.addListener(this.infoWindowEvent, () => {
      this.info.toggleInfoWindow();
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