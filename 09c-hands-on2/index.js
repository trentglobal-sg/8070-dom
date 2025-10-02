document.addEventListener("DOMContentLoaded", async function(){
    const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";
    const response = await axios.get(url);
    console.log(response.data);
    document.querySelector("#name").innerText = response.data.Name;
    document.querySelector("#mobile-number").innerText = response.data.Mobile;
    document.querySelector("#current-address").innerText = response.data.Address["current Address"];
    document.querySelector("#permanent-address").innerText = response.data.Address["Permanent address"]
})