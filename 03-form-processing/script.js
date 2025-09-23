// Event: when user clicks on the Create Account button
// Input: the input#username and the input#email
// Process: None
// Output: the user name and email
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


    // PROCESSING: 
    if (Number(sum) === 9 && saluations) {
        // OUTPUT:
        console.log(username, email, saluations);

    } else {
        //OUTPUT
        console.log("Error!");
    }




})