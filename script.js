import ideaMap from "./lib/ideaMap.js"

var apiKey = "AIzaSyCJBeRKLO65KJR25Zb3HCmPoT1vP4MLX6I";
var element = document.querySelector('.map-container');
var position = {lat: 28.3949, lng: 84.1240};
var zoom = 6;
var type = "google";
var infoWindowMarkup = "<h4>Test Marker</h4>";
var infoWindowEvents = {
    show: {
        event: "mouseover",
        before: function (o) {
            console.log(o)
        },
        after: function (o) {
            console.log(o)
        }
    },
    hide: {
        event: "mouseout",
        before: function (o) {
            console.log(o)
        },
        after: function (o) {
            console.log(o)
        }
    },
    events: [
        {
            event: "click",
            handler: function (o) {
                alert(o.options.infoWindowContent)
            }
        }
    ]
};

var markerDetails = [
    {
        icon: "http://maps.google.com/mapfiles/ms/icons/blue.png",
        position: {lat: 28.26689, lng: 83.9685},
        info: '<h4>Test Marker 2</h4>',
        events: [{
            event: 'click',
            handler: function (o) {
                o.ideaInfoWindow.show();
            }
        },{
            event: 'mouseout',
            handler: function (o) {
                o.ideaInfoWindow.hide();
            }
        }, {
            event: 'hover',
            handler: function (o) {
                alert(o.options.info);
            }
        }]
    },
    {
        icon: "http://maps.google.com/mapfiles/ms/icons/green.png",
        position: {lat: 27.4368, lng: 85.0026},
        info: infoWindowMarkup
    },
    {
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        position: {lat: 28.8368, lng: 83.0026},
        info: infoWindowMarkup
    }
];

var mapOptions = {
    element: element,
    center: position,
    zoom: zoom,
    type: type,
    apiKey: apiKey,
    markerData: markerDetails,
    infoWindowEvents: infoWindowEvents
};

new ideaMap(mapOptions);