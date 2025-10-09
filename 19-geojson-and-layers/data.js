async function loadData(url) {
    const response = await axios.get(url);
    return response.data;
}