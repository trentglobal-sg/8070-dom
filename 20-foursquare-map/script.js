document.addEventListener("DOMContentLoaded", function(){
    const map = initMap(1.2938,  103.8540, "map");

    // create a search result layer
    const searchResultLayer = L.layerGroup();
    searchResultLayer.addTo(map);

    const searchBtn = document.querySelector("#search-btn");
    searchBtn.addEventListener("click", async function(){
        const searchTerms = document.querySelector("#search-terms").value;
        const center = map.getBounds().getCenter();
        const response = await search(center.lat, center.lng, searchTerms);
        displayResults(map, searchResultLayer, response.results);
    })

})