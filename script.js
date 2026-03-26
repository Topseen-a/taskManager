let taskList = document.querySelector("#task-list ul");

taskList.addEventListener("click",(event)=> {
    if (event.target.textContent == "delete") {
        let li = event.target.parentElement;
        li.remove();
    }
})



let addTaskForm = document.getElementById("add-task");

addTaskForm.addEventListener("submit",(event)=> {
    event.preventDefault()

    let value = document.querySelector("#add-task input").value.trim();

    if (value == "") return;

    let liTag = document.createElement("li");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check");

    let firstSpanTag = document.createElement("span");
    let secondSpanTag = document.createElement("span");

    firstSpanTag.textContent = value;
    secondSpanTag.textContent = "delete";

    firstSpanTag.classList.add("name");
    secondSpanTag.classList.add("delete");

    liTag.appendChild(checkBox);
    liTag.appendChild(firstSpanTag);
    liTag.appendChild(secondSpanTag);
    taskList.append(liTag);

    addTaskForm.reset();
})



let searchInput = document.querySelector("#search-tasks input");

searchInput.addEventListener("keyup",(event)=> {
    let searchText = event.target.value.toLowerCase();

    let tasks = document.querySelectorAll("#task-list li");

    tasks.forEach(function(task) {
        let taskName = task.querySelector(".name").textContent.toLowerCase();
        
        if (taskName.includes(searchText)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    })
})
