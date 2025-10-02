document.addEventListener("DOMContentLoaded", function(){
    const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";
    async function loadData() {
        const response = await axios.get(url);
        const ulElement = document.querySelector("#output");
        for (let user of response.data.users) {
            ulElement.innerHTML += `<li>${user.firstName} ${user.lastName} (${user.emailAddress})</li>`
        }
    }
    loadData();
})