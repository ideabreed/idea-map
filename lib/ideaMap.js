import ideaMarker from './marker';

export default class ideaMap {
    constructor(options) {
        this.options = options;
        this.ideaMarkers = [];
        this.setApi();
    }

    render() {
        this.object = new google.maps.Map(this.options.element, {
            center: this.options.center,
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
            ideaMap.setMarker();
        };

        script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.options.apiKey;
        head.insertBefore(script, head.firstChild);
    }

    setMarker() {
        if (this.options.markerData) {
            this.options.markerData.forEach(markerDetail => {
                let newIdeaMarker = new ideaMarker({
                    ...markerDetail,
                    ...{
                        ideaMap: this,
                        infoWindowEvents: this.options.infoWindowEvents
                    }
                });
                this.ideaMarkers.push(newIdeaMarker)
            });
        }
    }


}