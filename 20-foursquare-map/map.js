function initMap(lat, lng, mapElementID) {
    const coordinate = [lat, lng];
    const map = L.map(mapElementID);
    map.setView(coordinate, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const searchResultLayer = L.layerGroup().addTo(map);

    return {map, searchResultLayer};
}

function displayResults(mapConfig, results) {
    mapConfig.searchResultLayer.clearLayers(); // remove all existing marker, if any
   
    const searchResultDisplay = document.querySelector("#search-results");
    searchResultDisplay.innerHTML = ""; // remove all children elements

    results.forEach(function(result){

        // create the marker
        const marker = L.marker([result.latitude, result.longitude]);
        marker.addTo(mapConfig.searchResultLayer);
        marker.bindPopup(`
            <h1>${result.name}</h1>
            <ul>
                <li>Address:${result.location.formatted_address}</li>
                <li>Website:${result.website}</li>
                <li>Phone:${result.tel}</li>   
            </ul>
            `)
        // create the search result
        const resultElement = document.createElement('div');
        resultElement.innerHTML = result.name;
        searchResultDisplay.appendChild(resultElement);
        
        // add click to result so that the map will zoom to the location
        resultElement.addEventListener("click", function(){
            mapConfig.map.flyTo([result.latitude, result.longitude], 16);
            marker.openPopup();
        })
    });
}