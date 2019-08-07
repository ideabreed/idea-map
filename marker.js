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
    var infoObj = this.info;
    this.object.addListener(this.infoWindowEvent.hide.event, (infoObj) => {
      this.infoWindowEvent.hide.before(infoObj)
      this.info.hide();
      this.infoWindowEvent.hide.after(infoObj)

    })
    this.object.addListener(this.infoWindowEvent.show.event, (infoObj) => {
      this.infoWindowEvent.show.before(infoObj)
      this.info.show();
      this.infoWindowEvent.show.after(infoObj)
    })
  }

  show() {
    this.object.setVisible(true);
  }

  hide() {
    this.object.setVisible(false);
  }
}

