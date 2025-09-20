
// Alternative 1: Mutate the innerText of `count`
const incrementBtn = document.querySelector("#incrementBtn");
const count = document.querySelector("#count");
const displayCount = document.querySelector("#displayCount");
incrementBtn.addEventListener("click", function () {
    if (Number(count.innerText) + 1 > 20) {
        return;
    }
    count.innerText = Number(count.innerText) + 1;
    if (Number(count.innerText) % 2 == 0) {
        count.style.color = "green";
    } else {
        count.style.color = "red";
    }

    displayCount.innerText = count.innerText;
});

const decrementBtn = document.querySelector("#decrementBtn");
decrementBtn.addEventListener("click", function () {
    if (Number(count.innerText) - 1 < 0) {
        return;
    }
    count.innerText = Number(count.innerText) - 1;
    displayCount.innerText = count.innerText;
    if (Number(count.innerText) % 2 == 0) {
        count.style.color = "green";
    } else {
        count.style.color = "red";
    }
})

const resetBtn = document.querySelector("#zeroBtn");
resetBtn.addEventListener("click", function () {
    count.innerText = 0;
    displayCount.innerText = count.innerText;
    count.style.color = "green";
})