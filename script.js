const taskList = document.querySelector("#task-list ul");
const addTaskForm = document.getElementById("add-task");
const searchInput = document.querySelector("#search-tasks input");


function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function renderTasks() {
    taskList.innerHTML = "";
    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("left");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("check");
        checkBox.checked = task.completed;

        const name = document.createElement("span");
        name.textContent = task.text;
        name.classList.add("name");

        if (task.completed) {
            name.classList.add("completed");
        }

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "delete";
        deleteBtn.classList.add("delete");

        checkBox.addEventListener("change", () => {
            tasks[index].completed = checkBox.checked;
            saveTasks(tasks);
            renderTasks();
        });

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        });

        leftDiv.appendChild(checkBox);
        leftDiv.appendChild(name);

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}


addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("#add-task input");
    const value = input.value.trim();

    if (value === "") return;

    const tasks = getTasks();

    tasks.push({
        text: value,
        completed: false
    });

    saveTasks(tasks);
    renderTasks();

    addTaskForm.reset();
});


searchInput.addEventListener("keyup", (event) => {
    const searchText = event.target.value.toLowerCase();
    const tasks = document.querySelectorAll("#task-list li");

    tasks.forEach(task => {
        const name = task.querySelector(".name").textContent.toLowerCase();

        task.style.display = name.includes(searchText) ? "flex" : "none";
    });
});


renderTasks();