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

/**
 * Fetches and parses chicken rice restaurant data.
 *
 * @returns {Promise<ChickenRiceResponse>} A structured list of chicken rice restaurant details.
 *
 * @typedef {Object} ChickenRiceResponse
 * @property {string} reply.text - A summary text describing the restaurants.
 * @property {Object[]} reply.locations - Array of restaurant location objects.
 * @property {string} reply.locations[].address - Full street address of the restaurant.
 * @property {string} reply.locations[].description - Human-readable summary of the restaurant.
 * @property {number} reply.locations[].lat - Latitude coordinate.
 * @property {number} reply.locations[].lng - Longitude coordinate.
 * @property {Object[]} [groundingChunks] - Optional list of Google Maps references.
 * @property {Object} groundingChunks[].maps - Map metadata for each restaurant.
 * @property {string} groundingChunks[].maps.uri - Direct Google Maps URL.
 * @property {string} groundingChunks[].maps.title - Restaurant name as listed on Google Maps.
 * @property {string} groundingChunks[].maps.placeId - Google Maps place ID.
 */
async function displayRecommendations(mapConfig, results) {
    mapConfig.searchResultLayer.clearLayers(); // remove all existing marker, if any

    const recommendationResultDisplay = document.querySelector("#recommend-results");
    recommendationResultDisplay.innerHTML = ""; // remove all children elements

    results.locations.forEach(async function(location, index){
        const marker = L.marker([location.lat, location.lng]);
        marker.addTo(mapConfig.searchResultLayer);
        
        // find matching grounding chunk
        const groundingChunk = results.groundingChunks && results.groundingChunks[index];
        const mapsData = groundingChunk && groundingChunk.maps;
        
        // create popup content function
        function createPopupContent() {
            return `
                <h1>${location.name}</h1>
                <ul>
                    <li>Address: ${location.address}</li>
                    ${location.rating ? `<li>Rating: ${location.rating}</li>` : ''}
                    ${location.website ? `<li>Website: ${location.website}</li>` : ''}
                    ${location.tel ? `<li>Phone: ${location.tel}</li>` : ''}
                    ${mapsData && mapsData.uri ? `<li><img src="https://www.google.com/favicon.ico" width="16" height="16" style="vertical-align:middle;"> <a href="${mapsData.uri}" target="_blank">View on Google Maps</a></li>` : ''}
                </ul>
            `;
        }
        
        marker.bindPopup(createPopupContent);
        
        // create the search result (no integration with our map since it's against Google TOS)
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        
        resultElement.innerHTML = `
            <div class="result-info">
                <div class="result-name">${location.name}</div>              
            </div>
        `;
        recommendationResultDisplay.appendChild(resultElement);       

        
        // add click to result so that the map will zoom to the location
        resultElement.addEventListener("click", function(){
            mapConfig.map.flyTo([location.lat, location.lng], 16);
            marker.openPopup();
        })
    });
   
}