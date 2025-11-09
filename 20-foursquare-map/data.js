const API_BASE_URL = "http://localhost:8888"

async function search(lat, lng, query, radius=5000) {
    const ll = lat + ',' + lng;
    const response = await axios.get(API_BASE_URL + "/api/places/search",{
        params: {
            ll: ll,
            query: query,
            radius: radius,
            limit: 50
        }
    });
    return response.data;

}

async function recommend(lat, lng, query) {

}