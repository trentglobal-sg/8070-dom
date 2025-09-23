const form = document.querySelector("#login");

// the event handler runs when the submit event
// is detected on the form.
// The first argument sent to the event handler function
// will be the data of the event
form.addEventListener("submit", function(event){
    // preventDefault: prevent the default behaviour
    // of an event
    event.preventDefault();

    // event.target = the element that the event happens
    const formData = new FormData(event.target);
    console.log(formData);
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("remember-me"));
    console.log(formData.getAll("options"));
    console.log("form submission detected!");
})