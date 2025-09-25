// all the data processing code goes inside here
// important: no visual code here (no reference to the DOM)

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

function getTasks(searchBy=null) {
    if (searchBy) {
        // perform some search algo
    } else {
        return tasks;
    }
}

function addTask(tasks, taskName, urgency, importance) {
    // create the new task
    const newTask = {
        "id": Math.floor(Math.random() * 1000000) + 1,
        "name": taskName,
        "urgency": urgency,
        "importance": importance,
        "done": false
    }
    tasks.push(newTask);
}

function deleteTaskByID(tasks, taskId) {

    let taskIndexToDelete = null;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
            taskIndexToDelete = i;
            break;
        }
    }

    tasks.splice(taskIndexToDelete, 1);
}