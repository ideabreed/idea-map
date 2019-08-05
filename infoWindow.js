class Infowindow {
  constructor(contentString, marker = "", ...args) {
    this.contentString = contentString;
    this.infowindow = new google.maps.InfoWindow({
      content: contentString
    })
  }
  // render() {
  //   this.infowindow = new google.maps.InfoWindow({
  //     content: this.contentString
  //   });
  // }
  showInfoWindow() {
    this.infowindow.show();
  }
  hideInfoWindow() {
    this.infowindow.hide();
  }
}

// let newInfo = new Infowindow(content)