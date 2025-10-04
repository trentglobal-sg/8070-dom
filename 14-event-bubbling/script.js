document.addEventListener("DOMContentLoaded", function(){
    const parentEl = document.querySelector("#parent");
    parentEl.addEventListener("click", function(event){
       
        console.log(event.target);
        console.log("parent recieves click event");
    })

    const aBtn = document.querySelector("#a-btn");
    aBtn.addEventListener("click", function(){
        console.log("a is clicked")
    })

    const bBtn = document.querySelector("#b-btn");
    bBtn.addEventListener("click", function(event){
        event.stopPropagation(); // disable event bubbling
        console.log("b is clicked");
    })
})