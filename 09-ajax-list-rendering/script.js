document.addEventListener("DOMContentLoaded", function () {
    async function loadData() {
        const response = await axios.get('data.json');
        console.log(response.data);
        const listGroup = document.querySelector("#output");
        listGroup.innerHTML = ""; // clear child content
        // response.data will be the array of books
        for (let b of response.data) {
            const liElement = document.createElement('li');
            liElement.className = "list-group-item";
            liElement.innerHTML = `
                <span>Title: ${b.title}</span>
                <span>Author: ${b.author}</span>
                <span>Pages: ${b.pages}</span>
            `
            listGroup.appendChild(liElement);
        }
    }

    loadData();
})

