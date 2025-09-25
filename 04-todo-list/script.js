

function displayAsInnerHTML() {

    const taskListEl = document.querySelector("#task-list");
        taskListEl.innerHTML = "";
    for (let task of tasks) {
        // .innerHTML is vulnerable to
        taskListEl.innerHTML += `<li>${task.name} (Done: ${task.done})</li>`
    }
}


// entry point of the application
document.addEventListener("DOMContentLoaded", function () {
    // displayAsInnerHTML();
    const tasks = getTasks();
    renderList(tasks);

    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", function(){
        const taskName = document.querySelector("#task-name").value;
        const urgency = parseInt(document.querySelector("#urgency").value);
        const importance = document.querySelector("#importance").value;

        const tasks = getTasks();
        addTask(tasks, taskName, urgency, importance);
        renderList(tasks);

    })

})


