function renderList(tasks) {
    const taskListEl = document.querySelector("#task-list");
    // clear the list of existing elements ('cos we are going to re-add them one by one again)
    taskListEl.innerHTML = "";
    for (let task of tasks) {
        // create a <li> element
        const liElement = document.createElement('li');
        // set the inner text of the <li>
        liElement.innerText = `${task.name} (Done: ${task.done})`;
        liElement.className = "mt-3 mb-3"

        const deleteButtonEl = document.createElement("button");
        deleteButtonEl.className = "btn btn-danger btn-sm ms-2 m-e";
        deleteButtonEl.innerText = "Delete";
        deleteButtonEl.addEventListener("click", function(){
            deleteTaskByID(tasks, task.id);
            renderList(tasks);
        })

        liElement.appendChild(deleteButtonEl);

        taskListEl.appendChild(liElement);


    }
}
