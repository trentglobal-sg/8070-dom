// We going to store the todo as an array of objects
// One object is one to do
// The array is the entire "database"

const tasks = [
    {
        "id": 1,
        "name": "Wash the car",
        "urgency": 3,
        "importance": "high",
        "done": false
    },
    {
        "id": 2,
        "name": "Buy the grocery",
        "urgency": 5,
        "importance": "low",
        "done": false
    },
    {
        "id": 3,
        "name": "Clean the toilet",
        "urgency": 1,
        "importance": "high",
        "done": false
    }
];

function displayAsInnerHTML() {
    const taskListEl = document.querySelector("#task-list");
    for (let task of tasks) {
        // .innerHTML is vulnerable to
        taskListEl.innerHTML += `<li>${task.name} (Done: ${task.done})</li>`
    }
}

function displayAsChildElements() {
    const taskListEl = document.querySelector("#task-list");
    for (let task of tasks) {
        // create a <li> element
        const liElement = document.createElement('li');
        // set the inner text of the <li>
        liElement.innerText = `${task.name} (Done: ${task.done})`;
    
        taskListEl.appendChild(liElement);
    }
}

// displayAsInnerHTML();
displayAsChildElements();
