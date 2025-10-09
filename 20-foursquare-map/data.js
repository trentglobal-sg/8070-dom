const API_BASE_URL = "https://zany-adventure-5g5vj6g4x9vqh7g4x-3000.app.github.dev"

async function search(lat, lng, query, radius=5000) {
    const ll = lat + ',' + lng;
    const response = await axios.get(API_BASE_URL + "/places/search",{
        params: {
            ll: ll,
            query: query,
            radius: radius,
            limit: 50
        }
    });
    return response.data;

}