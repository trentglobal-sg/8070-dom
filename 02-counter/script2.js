// Alternative 2: We use a variable to model the number
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#zeroBtn");
const count = document.querySelector("#count");
const displayCount = document.querySelector("#displayCount");

let number = 0;

updateView();

function updateView() {
    count.innerText = parseInt(number);
    if (number % 2 == 0) {
        count.style.color = "green";
    } else {
        count.style.color = "red";
    }
    displayCount.innerText = parseInt(number);
}

function updateCount(delta) {
    if (number + delta < 0 || number + delta > 20) {
        return;
    }
    number = number + delta;
}

incrementBtn.addEventListener("click", function(){
    updateCount(1);
    updateView();
})

decrementBtn.addEventListener("click", function(){
    updateCount(-1)
    updateView();
})

resetBtn.addEventListener("click", function(){
    number = 0;
    updateView();
});

/* EXTRA CHALLENGES
Counter challenges:
1. Make sure the number cannot go above 20
2. Make sure the Number cannot go below 0
3. Display the number in red if odd
4. Display the number in green if even

*/