document.addEventListener("DOMContentLoaded", function () {

    const onDeleteContact = function (idToDelete) {
        deleteContact(contacts, idToDelete);
        onRenderList();
    };

    function onRenderList() {
        const contacts = getContacts();
        renderContactList(contacts, onDeleteContact);
        // after re-rendering the list
        const editBtns = document.querySelectorAll(".edit-btn");
        for (let btn of editBtns) {
            btn.addEventListener("click", function (event) {
                const idToModfy = event.target.dataset.contactId;
                const newFirstName = prompt("Enter the new first name: ");
                const newMiddleName = prompt("Enter the new middle name: ");
                const newLastName = prompt("Enter the new last name: ");
                const salutation = prompt("Enter the new salutation");
                const email = prompt("Enter the new email")
                modifyContact(contacts, idToModfy, newFirstName, newMiddleName, newLastName, salutation, email )
                onRenderList();
            });
        }
    }

    onRenderList();




});