console.log("Hello from script.js");

const darkModeButton = document.querySelector("#darkModeBtn");
darkModeButton.addEventListener("click",toggleDarkMode);

const tooltip = document.querySelector("#dark-mode-tool-tip");
darkModeButton.addEventListener("mouseenter", function(){
    tooltip.style.display="block";
});

darkModeButton.addEventListener("mouseleave", function(){
    tooltip.style.display="none";
})

function toggleDarkMode() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // when we use querySelector, we specify the element
    // that we want to select using the selector syntax
    // for css
    const h2header = document.querySelector("h2");

    h2header.addEventListener('click', function () {
        h2header.innerText = "Japanese Food So Good it's Too Good to Be True";
    })

    // the CSS property must be in camel case
    // font-family => fontFamily
    // background-color => backgroundColor
    // h2header.style.fontFamily = "Verdana";
    // h2header.style.backgroundColor = "green";
    // h2header.style.padding = "10px";
    // h2header.className = "important"
    h2header.classList.add('important');

    // get element by tag name
    // functionally the same as document.querySelector("h1")[0]
    const h1header = document.getElementsByTagName("h1");

    // querySelector will only return the first match
    const importantElement = document.querySelector(".important");
    console.log(importantElement);

    // select all matches, we have to use .querySelectorAll()
    const allImportant = document.querySelectorAll(".important");
    console.log(allImportant);


    const allImportantParagraphs = document.querySelectorAll("p.important");
    console.log(allImportantParagraphs);

    // make a change to the return value of querySelectorAll
    for (let p of allImportantParagraphs) {
        p.style.fontSize = "64px";
        p.style.color = "green";
    }
}

