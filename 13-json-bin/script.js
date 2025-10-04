document.addEventListener("DOMContentLoaded", async function () {

    const books = await loadBooks();
    renderList();

    const addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", async function () {
        const title = document.querySelector("#book-title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        addBook(books, title, author, pages);
        renderList();
    })

    const bookList = document.querySelector("#book-listing");
    bookList.addEventListener("click", async function (event) {
        if (event.target.dataset.action == "delete") {
            const indexToDelete = parseInt(event.target.dataset.index);
            deleteBook(books, indexToDelete);
            renderList();
        } else if (event.target.dataset.action == "edit") {
            const index = parseInt(event.target.dataset.index);
            const originalBook = books[index];
            // Invoke Sweetalert to get the new title, author and page

            // Swal.fire to show the sweet alert
            // It is an async function we want to proceed only when the user
            // press the OK button.
            const result = await Swal.fire({
                title: 'Edit Book',
                html:
                    `<div>
                        <label>Title:</label>
                        <input type="text" id="swal-title" class="swal2-input" placeholder="Title" value="${originalBook.title}">
                    </div>
                    <div>
                        <label>Author:</label>
                        <input type="text" id="swal-author" class="swal2-input" placeholder="Author" value="${originalBook.author}">
                    </div>
                    <div>
                        <label>Pages</label>
                        <input type="number" id="swal-pages" class="swal2-input" placeholder="Pages" value="${originalBook.pages}">
                    </div>`,
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Save Changes',
                preConfirm: () => {
                    const title = document.getElementById('swal-title').value;
                    const author = document.getElementById('swal-author').value;
                    const pages = document.getElementById('swal-pages').value;

                    // Basic validation
                    if (!title || !author || !pages) {
                        Swal.showValidationMessage('Please fill in all fields');
                        return false;
                    }
                    if (isNaN(pages) || pages <= 0) {
                        Swal.showValidationMessage('Please enter a valid number of pages');
                        return false;
                    }
                    // Return the data if validation passes
                    return { title, author, pages: parseInt(pages) };
                }
            });

            if (result.isConfirmed) {
                // Update the original book object with the new values
                books[index] = result.value;
                // Optional: Add code here to refresh your UI or save the data
                await Swal.fire('Saved!', 'The book has been updated.', 'success');
                renderList();
                saveBooks(books);
            }
        }

    });

    async function renderList() {
        const bookListing = document.querySelector("#book-listing");
        bookListing.innerHTML = "";
        books.forEach(function (b, index) {
            const liElement = document.createElement('li');
            // same effect as `<li class="list-group-item"></li>`
            liElement.className = 'list-group-item';
            liElement.innerHTML = `
                <span>Title: ${b.title}</span>
                <span>Author: ${b.author}</span>
                <span>(${b.pages} pages)</span> 
                <button class="btn btn-success btn-sm" data-action="edit" data-index="${index}">Edit</button> 
                <button class="btn btn-danger btn-sm" data-action="delete" data-index="${index}">Delete</button>
            `
            bookListing.appendChild(liElement);
        });
    }






})