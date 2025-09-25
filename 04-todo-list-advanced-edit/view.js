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
        deleteButtonEl.addEventListener("click", function () {
            deleteTaskByID(tasks, task.id);
            renderList(tasks);
        })

        const editButtonEl = document.createElement("button");
        editButtonEl.className = "btn btn-success btn-sm ms-2 me-2";
        editButtonEl.innerText = "Edit";
        editButtonEl.addEventListener("click", function () {

            const editDialog = document.querySelector("#edit-dialog");
            editDialog.style.display = "block";
            editDialog.querySelector(".modal-title").innerText = task.name;
            editDialog.querySelector(".modal-body").innerHTML = `
                <div>
                    <label>New Name:</label>
                    <input type="text" class="form-control" id="new-task-name" value="${task.name}"/>
                </div>
                <div>
                    <label>New Urgency:</label>
                    <input type="number" class="form-control" id="new-urgency" value="${task.urgency}"/>
                </div>
                <div>
                     <label>Importance</label>
                <select id="importance" class="form-control">
                    <option value="low" ${task.importance == "low" ? "selected":""}>Low</option>
                    <option value="medium" ${task.importance=="medium"? "selected":""}>Medium</option>
                    <option value="high" ${task.importance=="high" ? "selected": ""}>High</option>
                </select>
                </div>
            
            
            
            `

            // const newName = prompt("Enter the new name of the task", task.name);
            // const urgency = parseInt(prompt("Enter the new urgency"), task.urgency +"");
            // const importance = prompt("Enter the importance", task.importance);
            // const done = prompt("Is it done (enter y for yes)", task.done == true ? "y":"n").toLowerCase() == "y";

            // editTaskByID(tasks, task.id, newName, urgency, importance, done);
            // renderList(tasks);




        })

        liElement.appendChild(editButtonEl);
        liElement.appendChild(deleteButtonEl);


        taskListEl.appendChild(liElement);


    }
}
