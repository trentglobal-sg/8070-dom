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
    const response = await axios.post(API_BASE_URL + "/api/deepseek/chat", {
        userMessage: query,
         "systemMessage": `You are a professional travel advisor. Always respond with a single JSON object with the following structure: { \"text\": \"Helpful travel advice.\", \"locations\": [ { \"name\": \"<string>\", \"lat\": \"<number>\", \"lng\": \"<number>\", \"description\": \"<string>\",  \"website\": \"<website url>\" } ] }. The text field should be a narrative summary of all the locations, not a list, since the locations are already listed in the locations array. Only answer travel-related questions close to latitude: ${lat} and longitude: ${lng}.`,
    })

    console.log(response.data);
   
    // remove data with null lat or lng, or with 0 values
    response.data.content.locations = response.data.content.locations.filter(function(location){
        return location.lat !== null && location.lng !== null && location.lat !== 0 && location.lng !== 0;
    });

    // if empty results, throw an error
    if (response.data.content.locations.length === 0) {
        throw new Error("The AI didn't find any results. Please try again");
    }


    return response.data.content;
}
