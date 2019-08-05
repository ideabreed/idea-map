class Infowindow {
  constructor(options) {
    this.options = options;
    var markup = document.createElement('div');
    markup.innerHTML = options.infoWindowContent;
    var thisWindow = this;
    options.infoWindowEvent.events.forEach(function (ev) {
      markup.addEventListener(ev.event, function () {
        ev.handler(thisWindow);
      })
    })
    this.infoWindow = new google.maps.InfoWindow({
      content: markup,
      opened: false
    });
  }
  show() {
    this.infoWindow.open(this.options.map, this.options.marker);
    this.infoWindow.opened = true;
  }
  hide() {
    this.infoWindow.close();
    this.infoWindow.opened = false;
  }
  toggle() {
    if (this.infoWindow.opened) {
      this.hide();
      this.infoWindow.opened = false;
    }
    else {
      this.show();
      this.infoWindow.opened = true;
    }
  }
}
