
import ideaMap from "./lib/ideaMap.js"

var element = document.querySelector('.map-container');
var centerPosition = {lat: 28.3949, lng: 84.1240};

var markerDetails = [
    {
        icon: "http://maps.google.com/mapfiles/ms/icons/blue.png",
        position: {lat: 28.26689, lng: 83.9685},
        info: '<h4>Test Marker 1</h4>',
    },
    {
        icon: "http://maps.google.com/mapfiles/ms/icons/green.png",
        position: {lat: 27.4368, lng: 85.0026},
        info: '<h4>Test Marker 2</h4>',
    },
    {
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        position: {lat: 28.8368, lng: 83.0026},
        info: '<h4>Test Marker 3</h4>',
    }
];

var mapOptions = {
    element: element,
    center: centerPosition,
    markerData: markerDetails,
};

new ideaMap(mapOptions);
