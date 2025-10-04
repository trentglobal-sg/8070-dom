const JSON_BIN_BASE_URL = "https://api.jsonbin.io/v3";
const JSON_BIN_ID = "68e0b172ae596e708f05835e";

async function loadBooks() {
    const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`);
    return response.data.record;
}

function addBook(books, title, author, pages) {
    const newBook = {
        title,
        author,
        pages,
    }
    books.push(newBook);
    // save the current books array to the JSON Bin
    // no need `await` because there's no tasks dependent on the saving
    saveBooks(books);
}

async function deleteBook(books, index) {
    books.splice(index, 1);
    saveBooks(books);
}

async function saveBooks(books) {

    if (!books || Array.isArray(books) == false) {
        throw "Books is not defined";  // Tell JS to crash with an error
    }

    // books must be an object or array for it to be saved to JSON bin
    await axios.put(JSON_BIN_BASE_URL + "/b/" + JSON_BIN_ID, books);
}