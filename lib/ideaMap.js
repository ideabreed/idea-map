import ideaMarker from './marker';

export default class ideaMap {
    /**
     *
     * @param options
     * valid options:{
     *
     *   element: element,
     *   center: position,
     *   zoom: zoom,
     *   type: type,
     *   apiKey: apiKey,
     *   markerData: markerDetails,
     *   infoWindowEvents: infoWindowEvents
     * }
     */
    constructor(options) {
        this.options = options;
        this.ideaMarkers = [];
        this.setApi();
    }

    render() {
        this.object = new google.maps.Map(this.options.element, {
            center: this.options.center,
            zoom: this.options.zoom || 6
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

        if (this.options.apiKey) {
            script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.options.apiKey;
        } else {
            script.src = "https://maps.googleapis.com/maps/api/js";
        }
        head.insertBefore(script, head.firstChild);
    }

    setMarker() {
        if (this.options.markerData) {
            this.options.markerData.forEach(markerDetail => {
                let newIdeaMarker = new ideaMarker({
                    ...markerDetail,
                    ...{
                        ideaMap: this,
                        infoWindowEvents: this.options.infoWindowEvents || this.defaultInfoWindowEvents()
                    }
                });
                this.ideaMarkers.push(newIdeaMarker)
            });
        }
    }

    defaultInfoWindowEvents() {
        var opt = {
            show: {
                event: "mouseover",
            },
            hide: {
                event: "mouseout",
            }
        };
        return (opt);
    }


}