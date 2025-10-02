document.addEventListener("DOMContentLoaded", function(){
    const loadBtn = document.querySelector("#loadBtn");
    loadBtn.addEventListener("click", async function(){
        // when axios.get is called with a relative URL
        // the URL is relative to the URL that is currently
        // in the web browser
        const response = await axios.get("data.json");
        document.querySelector("#output").innerHTML = `
            <ul>
                <li>Book: ${response.data.book}</li>
                <li>Author: ${response.data.author}</li>
                <li>Pages: ${response.data.pages}</li>
                <li>Borrowed: ${response.data.borrowed ? "Yes" : "No"}</li>
            </ul>
        `
    })
});