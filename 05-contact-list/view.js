// onDeleteContact MUST be a function passed as a value
function renderContactList(contacts, onDeleteContact) {
    const contactListEl = document.querySelector("#contact-list");
    contactListEl.innerHTML = "";
    for (let contact of contacts) {
        const trEl = document.createElement('tr');
        trEl.innerHTML = `
            <td>${contact.id}</td>
            <td>${contact.firstName}</td>
            <td>${contact.middleName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.salutation}</td>
            <td>${contact.email}</td>
            <td>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `
        // the child elements inside trEl is created when we change its innerHTML

        trEl.querySelector(".delete-btn").addEventListener("click", function(){
            onDeleteContact(contact.id)
        })

        contactListEl.appendChild(trEl);
        
    }
}