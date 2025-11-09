document.addEventListener("DOMContentLoaded", function(){
    const mapConfig = initMap(1.2938,  103.8540, "map");

    const searchBtn = document.querySelector("#search-btn");
    searchBtn.addEventListener("click", async function(){
        const searchTerms = document.querySelector("#search-terms").value;
        const center = mapConfig.map.getBounds().getCenter();
        const response = await search(center.lat, center.lng, searchTerms);
        displayResults(mapConfig, response.results);
    })

})