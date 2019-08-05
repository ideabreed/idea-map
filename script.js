var apiKey = "AIzaSyCJBeRKLO65KJR25Zb3HCmPoT1vP4MLX6I";
var element = document.querySelector('.map-container');
var position = { lat: 28.3949, lng: 84.1240 };
var zoom = 6;
var type = "google";
var infoWindowMarkup = "<h4>hello</h4>"
var infoWindowEvent = "mouseover";
var markerDetails = [
  { icon: "http://maps.google.com/mapfiles/ms/icons/blue.png", position: { lat: 28.26689, lng: 83.9685 }, info: '<h4>bye</h4>' },
  { icon: "http://maps.google.com/mapfiles/ms/icons/blue.png", position: { lat: 27.4368, lng: 85.0026 }, info: infoWindowMarkup },
  { icon: "http://maps.google.com/mapfiles/ms/icons/blue.png", position: { lat: 28.8368, lng: 83.0026 }, info: infoWindowMarkup }
]

var mapOptions = {
  ele: element,
  pos: position,
  zo: zoom,
  typ: type,
  api: apiKey,
  mrk: markerDetails,
  infoEv: infoWindowEvent
}

map = new Ideamap(mapOptions);