// Event: when user clicks on the Create Account button
// Input: the input#username and the input#email
// Process: None
// Output: the user name and email

const usernameTextbox = document.querySelector("#username");
usernameTextbox.addEventListener("blur", function(event){
    if (event.target.value == "") {
        document.querySelector("#username-error").innerText = "Cannot be empty"
    }
})

const createBtn = document.querySelector("#createBtn");
createBtn.addEventListener("click", function () {

    // INPUT
    const usernameTextbox = document.querySelector("#username");
    const username = usernameTextbox.value;

    const email = document.querySelector("#email").value;

    const sum = document.querySelector("#sum").value;

    // ?. means optional chanining
    // if the expression before the ?. is falsly, then the entire expression
    // evaluates to undefined.
    const saluations = document.querySelector(".saluations:checked")?.value;

    const selectedHobbies = [];
    const selectedHobbyCheckboxes = document.querySelectorAll(".hobbies:checked");
    for (let checked of selectedHobbyCheckboxes) {
        selectedHobbies.push(checked.value);
    }

    // const selectedHobbyCheckboxes = document.querySelectorAll(".hobbies:checked");
    // const selectedHobbies = Array.from(selectedHobbyCheckboxes).map(function(checkbox){
    //     return checkbox.value;
    // })

    console.log(selectedHobbies);


    const selectedInterestOptions = document.querySelectorAll("#interested-services option:checked");
    const selectedInterests = [];
    for (let o of selectedInterestOptions) {
        selectedInterests.push(o.value);
    }
    console.log(selectedInterests);

    // get selected country
    const countrySelect = document.querySelector('#country');
    console.log(countrySelect.value);


    // PROCESSING: 
    if (Number(sum) === 9 && saluations) {
        // OUTPUT:
        console.log(username, email, saluations);

    } else {
        //OUTPUT
        console.log("Error!");
    }




})