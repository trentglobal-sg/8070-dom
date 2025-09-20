
// Alternative 1: Mutate the innerText of `count`
// const incrementBtn = document.querySelector("#incrementBtn");
// incrementBtn.addEventListener("click", function(){
//     const count = document.querySelector("#count");
//     count.innerText = Number(count.innerText) + 1;  
// });

// Alternative 2: We use a variable to model the number
const incrementBtn = document.querySelector("#incrementBtn");
const count = document.querySelector("#count");

let number = 0;

function updateCount() {
    count.innerText = parseInt(number);
}

incrementBtn.addEventListener("click", function(){
    number++;
    updateCount();
})