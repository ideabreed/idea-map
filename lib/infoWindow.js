export default class ideaInfoWindow {
    /**
     *
     * @param options
     * valid options:{
     *
     *         info: this.options.info,
     *         ideaMarker: this,
     *         infoWindowEvents: this.options.infoWindowEvents
     * }
     */
    constructor(options) {
        this.options = options;
        var markup = document.createElement('div');
        markup.innerHTML = options.info;
        var thisWindow = this;
        this.options.infoWindowEvents.events.forEach(function (ev) {
            markup.addEventListener(ev.event, function () {
                ev.handler(thisWindow);
            })
        });

        this.object = new google.maps.InfoWindow({
            content: markup,
            opened: false
        });
    }

    show() {
        this.object.open(this.options.ideaMap.object, this.options.ideaMarker.object);
        this.object.opened = true;
    }

    hide() {
        this.object.close();
        this.object.opened = false;
    }

    toggle() {
        if (this.infoWindow.opened) {
            this.hide();
            this.infoWindow.opened = false;
        } else {
            this.show();
            this.infoWindow.opened = true;
        }
    }
}
