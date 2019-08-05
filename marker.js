class Marker {
  constructor(iconUrl = "", position, info, map, infoWindowEvent) {
    this.map = map;
    this.iconUrl = iconUrl;
    this.position = new google.maps.LatLng(position.lat, position.lng);
    this.infoWindowEvent = infoWindowEvent
    this.object;
    this.render();
    this.info = new Infowindow({
      infoWindowContent: info,
      map: map,
      marker: this.object,
      infoWindowEvent: infoWindowEvent
    });
  }

  render() {
    this.object = new google.maps.Marker({
      position: this.position,
      map: this.map,
      icon: {
        url: this.iconUrl
      }
    });
    this.object.addListener(this.infoWindowEvent.hide.event, () => {
      this.info.hide();
    })
    this.object.addListener(this.infoWindowEvent.show.event, () => {
      this.info.show();
    })
  }

  show() {
    this.object.setVisible(true);
  }

  hide() {
    this.object.setVisible(false);
  }
}

