# Idea Map 

The purpose of this library is to combine features of google map such as map, marker and corresponding info window rendering to a single API call. 
This simplifies implementing google map into your project while not having to remember all the associated API calls provided by it.
Just include the script tag into your project and initialize and object of ideaMap class with appropriate parameters while rendering the map.
While instantiating the ideaMap class, there are certain parameters that you need to pass according to your requirement. Let’s go over them:
Here, we’ve passed in an object while initializing the map

```javascript
var mapOptions = {
	ele: element,
	pos: position,
	zo: zoom,
	typ: type,
	api: apiKey,
	mrk: markerDetails,
	infoEv: infoWindowEvent
}

map = new ideaMap (mapOptions);
```

Lets break each values that we’ve passed to the key of mapOptions object.

- FOR ELEMENT TO RENDER THE MAP IN THE VIEW:
    `ele` is the HTML element where we want to render the map to:
    ```js
        var element = document.querySelector ( ‘.map-container’ ),`
    ```
     given that we have a div with class `map-container`

- FOR POSITION TO CENTER THE MAP IN
    `pos` is the position to render map centered at. It is given as an object with lat and lng key-value:
    ```js
        var position = { lat: 28.3949, lng: 84.120 }
    ```
- FOR ZOOM LEVEL OF MAP
    `zo` is the zoom level to render map in:
	```js
    var zoom = 6
    ```
- FOR TYPE OF MAP
    `typ` is the type of map that is to be rendered (google or open-street; it supports google only for now)
    ```js
        var type = “google”
    ```
- FOR API KEY OF MAP
    `api` is the key of your google map api
    ```js
        var key = “<your-key-here>”
    ```
- FOR MARKERS TO RENDER IN THE MAP
    `mrk` markerDetails is an array of objects, each object with details of the marker to be generated in the map, as so:
    ```js
        var markerDetails = [
                  { icon: "http://maps.google.com/mapfiles/ms/icons/red.png", position: { lat: 28.26689, lng: 83.9685 },
                  info: '<h4>bye</h4>' },
                  
                  { icon: "http://maps.google.com/mapfiles/ms/icons/blue.png", position: { lat: 27.4368, lng: 85.0026 }, 
                  info: infoWindowMarkup }, 
                  
                  { icon: "http://maps.google.com/mapfiles/ms/icons/green.png", position: { lat: 28.8368, lng: 83.0026 }, info: infoWindowMarkup }
                  ]
    ```
    
    `infoWindowMarkup` is the markup content to be displayed in the marker’s infoWindow
    ```js
        var infoWindowMarkup = “<h2> Test InfoWindow </h2>”
    ```
- FOR EVENTS TO HANDLE INFOWINDOW OF A MARKER
    `infoEv` infoWindowEvent You can also provide events to show or hide the infoWindow or an array of events that perform custom actions on the infoWindow as shown below:
    ```js
    var infoWindowEvent = {
        show: 
        {
           event: "mouseover",
           before: function (o) { console.log(o) },
           after: function (o) { console.log(o) }
        },
        	hide: 
        	{
        		event: "mouseout",
        		before: function (o) { console.log(o) },
        		after: function (o) { console.log(o) }
        	},
        events: 
        [
           {
            	event: "click",
        	handler: function (o) 
        	{ 
        		alert (o.options.infoWindowContent) 
        	}
           }
        ]	
    };
    		
    ```
## Everything in a nutshell:

- Set your api key:
	```js
        apiKey = “<key>”
    ```
- Get the HTML element to render the map in
	```js
	    element = document.querySelector(‘...’)
    ```
	(Don’t forget to provide the element with certain height 		and width for the map to render)
- Set position (latitude and longitude) in an object
	```js
	    position = {lat: ‘<lat-here>’, lng: ‘<lng-here>’}
    ```
- Set zoom
	```js
        zoom = 6
    ```
- Set type
	```js
        type = “google”
    ```
- Set content (in markup) to be shown in infoWindow of marker
	```js
        infoWindowMarkup = “<small>Test</small>”
    ```
- Set the events in which to show and hide the infoWindow. Also functions can be executed 
    before and after the show/hide events. Such functions return the corresponding marker object.
	```js
        	infoWindowEvent = {
        show: 
        {
           event: "mouseover",
           before: function (o) { console.log(o) },
           after: function (o) { console.log(o) }
        },
           hide: 
        	{
        		event: "mouseout",
        		before: function (o) { console.log(o) },
        		after: function (o) { console.log(o) }
        	},
        	};
    ```
- Events with custom actions can also be handled from within the infoWindow that is displayed. A function can also be set which, when after the event is triggered, gets executed and returns the corresponding infoWindow object. 
    ```js
    	infoWindowEvent = {
            show: 
            {
               event: "mouseover",
               before: function (o) { console.log(o) },
               after: function (o) { console.log(o) }
            },
            	hide: 
            	{
            		event: "mouseout",
            		before: function (o) { console.log(o) },
            		after: function (o) { console.log(o) }
            	},
            	events:
            	[{
            		event: “click”,
            		handler: function (o){ alert( o.options.infoWindowContent ) }
            	}]
    	};
    ```
- Markers to be rendered on the map are all wrapped in an array  of objects with each object containing the required properties for a marker, namely and an icon, a position to render the marker in(provided as an object with lat and lng), and an info key that contains the content of the infowindow.
    ```js
        allMarkers = [{
        	icon: "http://maps.google.com/mapfiles/ms/icons/blue.png",
        	position: {lat: 28, lng: 83},
        	info: ‘<h1> Hello </h1>’
        	}]
    ```
- Wrap it all in an object
    ```js
    	mapOptions = {
    		ele: element,
    		pos: position,
    		zo: zoom,
    		typ: type,
    		api: apiKey,
    		mrk: markerDetails,
    		infoEv: infoWindowEvent
    	}
    
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