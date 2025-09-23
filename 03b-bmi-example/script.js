// EIPO
// Event: When the calculate button is clicked
// Input: weight, height and units
// Processing:
const calculateBtn = document.querySelector("#calculateBtn");
calculateBtn.addEventListener("click", function(){
    // inputs
    const weightTextbox = document.querySelector("#weight");
    // any value from the forms is a STRING
    const weight = Number(weightTextbox.value);

    const height = Number(document.querySelector("#height")?.value);

    const selectedRadioButton = document.querySelector(".units:checked");
    const unit = selectedRadioButton ? selectedRadioButton.value : null;

    console.log(weight, height, unit);

    // processing
    let bmi = null;
    if (unit == "metric") {
        bmi = weight / height ** 2;
    } else if (unit == "imperial") {
        bmi = weight / height ** 2 * 703;
    }

    let weightCategory = null;
    if (bmi < 18.5) {
        weightCategory = "underweight";
    } else if (bmi < 25) {
        weightCategory = "healthy"
    } else if (bmi < 30) {
        weightCategory = "overweight";
    } else {
        weightCategory = "obese";
    }

    // Output
    document.querySelector("#results").style.display = "block";
    document.querySelector("#bmi-output").innerText = bmi;
    document.querySelector("#weight-class-output").innerText = weightCategory;

})