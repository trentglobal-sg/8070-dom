function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [randomLat, randomLng];
}


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
map.setView(singapore, 13)

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

const markerClusterLayer = L.markerClusterGroup(); // create a marker cluster group
markerClusterLayer.addTo(map); // add the marker cluster group to the map

for (let i = 0; i < 300; i++) {
    const latLng = getRandomLatLng(map);
    L.marker(latLng).addTo(markerClusterLayer);
}