const addTaskBtn = document.getElementById("addTask");
const addingBtn = document.querySelectorAll(".adding-btn");
const title = document.getElementById("title");
const description = document.getElementById("description")
const middleTodo = document.getElementById("middle-todo");
const middleIn = document.getElementById("middle-inprogress");
const middleStuck = document.getElementById("middle-stuck");
const middleDone = document.getElementById("middle-done");
const priority = document.getElementById("priority")


function addTask() {
    function removeTask(event) {
        console.log(event.target.id)
        const task = document.getElementById("task-" + event.target.id);
        console.log(task)
        task.remove()
    }

    const taskComponent = (id) => {
        return `<div id="task-${id}" class="task"" draggable="true">
        <i id="fa-circle-check" class="fa-regular fa-circle-check"></i>
        <div class="details">
            <h4>${title.value}</h4>
            <p>${description.value}</p>
            <button>${document.getElementById("priority").value}</button>
        </div>
        <div class="action">
            <i id=${id} class="fa-regular fa-circle-xmark" "></i>
            <i id="fa-pen-to-square" class="fa-solid fa-pen-to-square" "></i>
        </div>
    </div>`
    }

    const tasks = document.getElementById("status").value
    const id = "id" + Math.random().toString(16).slice(2)
    if (tasks === "todo") {
        middleTodo.innerHTML += taskComponent(id);
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    if (tasks === "inprogress") {
        middleIn.innerHTML += taskComponent(id);
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    if (tasks === "stuck") {
        middleStuck.innerHTML += taskComponent(id);
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    if (tasks === "done") {
        middleDone.innerHTML += taskComponent(id);
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    else {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    const removeBtn = document.getElementById(id);
    console.log(removeBtn)


    console.log(middleTodo)
}

addTaskBtn.addEventListener("click", addTask);

const modal = document.getElementById("modal");
addingBtn.forEach(addingBtn => {
    addingBtn.onclick = () => {

        modal.style.display = "flex";
        const tasks = document.getElementById("status")
        title.value = "";
        description.value = "";
        tasks.value = "";
        priority.value = "";
    }
})
