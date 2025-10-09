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

    const nparks = await loadData("nparks.geojson");
    // the first parameter to L.geoJson is the 
    // GeoJSON data
    // the second parameter is a configuration obejct
    const nparkLayer = L.geoJson(nparks, {
        onEachFeature:function(feature, layer) {
            // feature is the feature data from the geojson
            // layer is the actual leaflet layer created from the feature (what the user is going to see)
            layer.bindPopup(`
                 <ul>
                    <li>Name: ${feature.properties.PARK}</li>
                    <li>Length: ${feature.properties.Shape_Leng}m</li>
                 </ul>
                `)
        }
    });
    nparkLayer.setStyle({
        color: 'red'
    })
    nparkLayer.addTo(map);


    const cycling = await loadData("cycling.geojson");
    const cyclingLayer = L.geoJson(cycling,{
        onEachFeature:function(feature, layer) {
            const el = document.createElement('div');
            el.innerHTML = feature.properties.Description;
            const tds = el.querySelectorAll("td");
            const name = tds[0].innerText;
            layer.bindPopup(`<ul>
                    <li>Name: ${name}</li>
                </ul>`);
        }
    });
    // cyclingLayer.addTo(map);

    // Create a generic layer group (that can store layer groups)
    const touristLayer = L.layerGroup();
    // touristLayer.addTo(map);

    const locations = await loadData("locations.json");
    locations.tourist_spots.forEach(function(spot){
        const marker = L.marker([spot.lat, spot.lng]);
        marker.addTo(touristLayer);
        marker.bindPopup(`<h1>${spot.name}</h1>`)
    })

    // Implement the layer control
    // we have to define the base layers and the overlay
    // base layers = at least one can be selected
    // overlays = optional, any number of overlays can be toggled on

    const baseLayers = {
        "NParks Tracks":nparkLayer,
        "Cycling Tracks":cyclingLayer
    }

    const overlays = {
        "Tourist Spots": touristLayer
    }

    // create the control
    L.control.layers(baseLayers, overlays).addTo(map);

    // add event click listner to the show-tourist-btn
    document.querySelector("#show-tourist-btn")
        .addEventListener("click", function(event){
            if (map.hasLayer(touristLayer)) {
                // remove the tourist layer 
                map.removeLayer(touristLayer);
                event.target.innerText = "Show Tourist Spots";
            } else {
                // add the tourist layer if the map is not showing it right now
                map.addLayer(touristLayer);
                event.target.innerText = "Hide Tourist Spots";
            }
        })

}

document.addEventListener("DOMContentLoaded", function(){
    main();
})
