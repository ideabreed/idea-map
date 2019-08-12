# Idea Map 

The purpose of this library is to combine features of google map such as map, marker and corresponding info window rendering to a single API call. 
This simplifies implementing google map into your project while not having to remember all the associated API calls provided by it.
Just include the script tag into your project and initialize and object of ideaMap class with appropriate parameters while rendering the map.
While instantiating the ideaMap class, there are certain parameters that you need to pass according to your requirement. Let’s go over them:
Here, we’ve passed in an object while initializing the map


## Usage
## Minimum Code
```js
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

```
#### Output
![simple-map.png](images/simple-map.png)
## Using full features
```js
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
        before: function (ideaMarker) {
            console.log(ideaMarker)
        },
        after: function (ideaMarker) {
            console.log(ideaMarker)
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

```
- Instantiate and object of ideaMap and provide the object created earlier as an argument
    ```js
      map = new ideaMap (mapOptions);
    ```
    
## Contribution Guidelines

You are welcome to contribute to this library.

### Installation

```bash
yarn install
```

### Run server
```bash
yarn s
```