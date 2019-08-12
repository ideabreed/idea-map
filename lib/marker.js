import ideaInfoWindow from './infoWindow';


export default class ideaMarker {
    /**
     * @param options
     *
     * Valid options:{
     *
     *   icon: "http://maps.google.com/mapfiles/ms/icons/blue.png",
     *   position: {lat: 28.26689, lng: 83.9685},
     *   info: '<h4>Test Marker 2</h4>',
     *   events: [{
     *       event: 'click',
     *       handler: function (o) {
     *           o.ideaInfoWindow.show();
     *       }
     *   },{
     *       event: 'mouseout',
     *       handler: function (o) {
     *           o.ideaInfoWindow.hide();
     *       }
     *   }, {
     *       event: 'hover',
     *       handler: function (o) {
     *           alert(o.options.info);
     *       }
     *   }],
     *   ideaMap: new ideaMap
     * }
     */
    constructor(options) {
        this.options = options;
        this.render();
        this.ideaInfoWindow = new ideaInfoWindow({
            info: this.options.info,
            ideaMap: this.options.ideaMap,
            ideaMarker: this,
            infoWindowEvents: this.options.infoWindowEvents
        });
    }

    render() {
        this.object = new google.maps.Marker({
            position: new google.maps.LatLng(this.options.position.lat, this.options.position.lng),
            map: this.options.ideaMap.object,
            icon: {
                url: this.options.icon
            }
        });

        // Set event handlers to the marker object
        var markerObj = this;
        if (this.options.infoWindowEvents.hide) {
            this.object.addListener(this.options.infoWindowEvents.hide.event, (e) => {
                console.log(markerObj);

                this.options.infoWindowEvents.hide.before(this.object);
                this.ideaInfoWindow.hide();
                this.options.infoWindowEvents.hide.after(markerObj)

            });
        }


        if (this.options.infoWindowEvents.show) {
            this.object.addListener(this.options.infoWindowEvents.show.event, (e) => {
                this.options.infoWindowEvents.show.before(markerObj);
                this.ideaInfoWindow.show();
                this.options.infoWindowEvents.show.after(markerObj);
            })
        }
    }

    show() {
        this.object.setVisible(true);
    }

    hide() {
        this.object.setVisible(false);
    }
}

