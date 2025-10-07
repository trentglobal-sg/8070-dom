// How leaflet represents coordinate
const singapore = [1.3521, 103.8198];

// L is the object that represents Leaflet
// the arugment is the id that will hold the map
const map = L.map("map", {
    doubleClickZoom: false
});

// set the zoom level and the center point
// first argument: the center point
// second argument: the starting zoom level
map.setView(singapore, 13 )

// Create a tile layer for the map
// tile = a tile is a square image
// layer = it's a 2d image that can contain other images
// in leaflet, a layer is some kind of user interface that the user can see
// -- it's an UI element like an icon, or a marker, or graphics that is on the top
// a tile layer must be provided by a tile layer service provider
// in our case openstreetmap provides the map graphics
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adding a layers to the map
// 1. Marker
const singaporeMarker = L.marker([1.3066, 103.8518]);
singaporeMarker.addTo(map);

// alternative way of adding marker to the map
const botanticGardenMarker = L.marker([1.3138, 103.8159]);
map.addLayer(botanticGardenMarker);

singaporeMarker.addEventListener("click", function(){
    alert("Welcome to Singapore");
});

// bindPopup allows you to display text in a popup window when the marker is interacted with
botanticGardenMarker.bindPopup(`<h1>Botantic Garden</h1>`)

map.on("dblclick", function(event){
    const latLng = event.latlng;
    const marker = L.marker(latLng);
    // to find which address this lat lng belongs to do we need reverse geocoding service
    marker.addTo(map);
});

// 2. Shapes / Vectors
const circle = L.circle([1.3552, 103.7972], {
    radius: 500,
    color: 'blue',
    fillColor: 'navy'
});
circle.addTo(map);
// if .bindPopup is a function, then return of the function is consdidered as HTML
// and will be shown in a popup window
circle.bindPopup(function(){
    return `Central Water Catchement Area`
})