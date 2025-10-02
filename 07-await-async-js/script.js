document.addEventListener("DOMContentLoaded", function(){

    const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";
    const loadDataBtn = document.querySelector("#loadDataBtn");
    loadDataBtn.addEventListener("click", function(){
        // promises
        // axios.get is an async function
        // a function is async when it returns a promise
        const loadDataPromise = axios.get(url);
        console.log(loadDataPromise);

        // when the promise finishes executing
        // and the return value, it will
        // call the function which is the argument
        // for .then
        loadDataPromise.then(function(response){
            console.log(response.data);
            document.querySelector("#output").innerText = response.data
        })
    })

    // using await/async syntax
    const loadDataAwaitBtn = document.querySelector("#loadDataAwaitBtn");
    loadDataAwaitBtn.addEventListener("click", async function(){
        const loadDataPromise = axios.get(url);

        // we use await on a promise
        // aka const response = await axios.get(url);
        const response = await loadDataPromise;
        document.querySelector("#output").innerText = response.data;
    })

    setInterval(function(){
        console.log("hello");
    }, 1000);

})