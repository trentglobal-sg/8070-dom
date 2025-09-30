const contacts = [
    {
        id: 1,
        firstName: "Joh",
        middleName: "",
        lastName:"Snow",
        salutation:"Mr",
        email:"jonsnow@asd.com"
    },
    {
        id: 2,
        firstName: "Tony",
        middleName: "Barker",
        lastName:"Stare",
        salutation: "Mr.",
        email:"tonystare@asd.com"
    },
    {
        id: 3,
        firstName:"Tan",
        middleName:"",
        lastName:"Ah Kow",
        salutation:"Mr.",
        email:"tanahkow@asd.com"
    }
]

// write four functions: related to CRUD
function getContacts(){
    // 1. it's a bad software engineering to rely on global variables
    // relying on global functions is better (though not good)
    // 2. this is a good place to implement search
    return contacts;
}

// parameter 1: the array of contacts we are adding to
function addNewContact(contacts, firstName, lastName, middleName, salutation, email) {
    const newContact = {
        id: Math.floor(Math.random() * 10000) + 1,
        firstName,
        lastName,
        middleName,
        salutation,
        email
    }

    // add the newly created contact to the database (i.e contacts array)
    contacts.push(newContact);
}

function modifyContact(contacts, idToModify, newFirstName, newLastName, newMiddleName, newSalutation, newEmail) {
    const modifiedContact = {
        id: idToModify, 
        firstName: newFirstName,
        lastName: newLastName,
        middleName: newMiddleName,
        salutation: newSalutation,
        email: newEmail
    }

    // replace the existing contact with the modifed one
    const indexToReplace = contacts.findIndex(function(element){
        return element.id == idToModify;
    })

    /* let indexToReplace2 = null;
    // for (let i = 0; i < contacts.length; i++) {
    //     const element = contacts[i];
    //     if (element.id == idToModify) {
    //         indexToReplace2 = i;
    //         break;
    //     }
    // }
    */

    contacts[indexToReplace] = modifiedContact;
}

function deleteContact(contacts, idToDelete) {
    const indexToDelete = contacts.findIndex(e =>  e.id == idToDelete);
    contacts.splice(indexToDelete, 1);

}

function testData(){
    // const johnWick = addNewContact(contacts, "John", "Rene", "Wick", "Mr.", "johnwick@asd.com");
    // console.log(contacts);

    // modifyContact(contacts, 2, "Johnny", "Barker", "Stare", "Mr.", "johnny@asd.com");
    // console.log(contacts);

    // deleteContact(contacts, 2); // delete from middle
    // console.dir(contacts);

    // deleteContact(contacts, 1); // delete the first index
    // console.dir(contacts);

    deleteContact(contacts, 3);
    console.log(contacts);
}


// testData();