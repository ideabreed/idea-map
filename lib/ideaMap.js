import Marker from './marker';

export default class ideaMap {
    constructor(options) {
        this.options = options;
        this.setApi();
    }

    render() {
        this.object = new google.maps.Map(this.options.element, {
            center: this.options.position,
            zoom: this.options.zoom
        })
    }

    setApi() {
        let head = document.getElementsByTagName('body')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        var ideaMap = this;
        script.onload = function () {
            ideaMap.render();
            ideaMap.setMarker(ideaMap.markerDetails);
        };

        script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.options.apiKey;
        head.insertBefore(script, head.firstChild);
    }

    setMarker(markers) {
        if (markers) {
            markers.forEach(markerDetail => {
                let newMarker = new Marker(markerDetail.icon, markerDetail.position, markerDetail.info, this.object, this.options.infoWindowEvent)
                this.markers.push(newMarker)
            });
        }
    }


}