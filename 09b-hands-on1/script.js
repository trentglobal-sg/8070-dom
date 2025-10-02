document.addEventListener("DOMContentLoaded", async function () {
    const url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt";

    async function loadData() {
        const response = await axios.get(url);
        const outputEl = document.querySelector("#output");
        outputEl.innerHTML = response.data;
    }

    loadData();

})


