// let wrapper = document.getElementById("wrapper");

// let title = document.getElementsByClassName("title");

// let liTag = document.getElementsByTagName("li");

// let wrapper = document.querySelector("#wrapper");

// let liTag = document.querySelectorAll("li"); // returns a nodelist

// console.log(liTag);

let taskList = document.querySelector("#task-list ul");
let addTaskForm = document.getElementById("add-task")

taskList.addEventListener("click",(event)=> {
    if (event.target.textContent == "delete") {
        let li = event.target.parentElement;
        li.remove();
    }
})

addTaskForm.addEventListener("submit",(event)=> {
    event.preventDefault()

    let value = document.querySelector("#add-task input").value.trim();

    let liTag = document.createElement("li");
    let firstSpanTag = document.createElement("span");
    let secondSpanTag = document.createElement("span");

    firstSpanTag.textContent = value;
    secondSpanTag.textContent = "delete";

    firstSpanTag.classList.add("name");
    secondSpanTag.classList.add("delete");

    liTag.appendChild(firstSpanTag);
    liTag.appendChild(secondSpanTag);
    taskList.append(liTag);

    addTaskForm.reset();
})
