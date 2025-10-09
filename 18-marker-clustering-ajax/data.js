const url = "https://api.data.gov.sg/v1/transport/taxi-availability";
async function loadLocations() {
    const response = await axios.get(url);
    return response.data.features[0].geometry.coordinates
}