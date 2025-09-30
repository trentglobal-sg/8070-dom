const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt"

function fetchExample() {
    // fetch is an asyncrhonous function,  will return a promise when called
    // a promise is a function that will be complete in future
    // the response will be the return value of fetch 
    fetch(url).then(function (response) {
        return response.text();  // converting the resposne to text
    }).then(function (text) {
        console.log(text);
    })
    console.log("hhaha");
}

// HTTP GET method is for getting data, hence axios.get
// axios.get(url).then(function(response){
//     console.log(response.data);
// })

// await and async
// async must be paired with await
// async means that the function is asynchronous (i.e it will contains asynchornous operations)
async function loadTextData() {
    // await: wait here until the promise is resolved
    const response = await axios.get(url);
    console.log(response.data);
}
loadTextData();
console.log("abc");
console.log("def");