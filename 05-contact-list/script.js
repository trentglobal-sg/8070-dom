document.addEventListener("DOMContentLoaded", function(){
    
    const contacts = getContacts();

    const onDeleteContact =  function(idToDelete){
        deleteContact(contacts, idToDelete);  
        renderContactList(contacts, onDeleteContact);
    };

    renderContactList(contacts, onDeleteContact);

    

});