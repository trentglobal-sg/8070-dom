async function loadLocations() {
    const response = await axios.get("locations.json");
    return response.data.tourist_spots;
}