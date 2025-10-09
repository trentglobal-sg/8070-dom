async function main() {
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

    const markerClusterLayer = L.markerClusterGroup();
    markerClusterLayer.addTo(map);

    const taxiData = await loadLocations();
    taxiData.forEach(function(t){
        const lat = t[1];
        const lng = t[0];
        const marker = L.marker([lat, lng]);
        marker.addTo(markerClusterLayer);
    })


}

document.addEventListener("DOMContentLoaded", function(){
    main();
})
