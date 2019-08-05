class Marker {
  constructor(iconUrl = "", position, info, map, ...args) {
    super(...args);
    this.map = map;
    this.iconUrl = iconUrl;
    this.position = new google.maps.LatLng(position.lat, position.long);
    this.info = new Infowindow(info);
    this.render();
    this.marker = this.render();
    this.markerObj = [];
  }

  render() {
    let marker = new google.maps.Marker({
      position: this.position,
      map: this.map,
      icon: {
        url: this.iconUrl
      }
    });
    this.markerObj.push(marker);
    return marker
  }

  show() {
    this.marker.setVisible(true);
  }

  hide() {
    this.marker.setVisible(false);
  }

  onClick() {
    this.marker.addEventListenter('click', () => {

    })
  }

  onHover() {
    this.marker.addEventListenter('hover', () => {

    })
  }

}