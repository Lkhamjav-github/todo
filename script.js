const addTaskBtn = document.getElementById("addTask");

function addTask() {
    const middleTodo = document.getElementById("middle-todo");
    const middleIn = document.getElementById("middle-inprogress");
    const middleStuck = document.getElementById("middle-stuck");
    const middleDone = document.getElementById("middle-done");
    const title = document.getElementById("title");
    const description = document.getElementById("description")

    const task = () => {
        return `<div class="task"">
        <i id="fa-circle-check" class="fa-regular fa-circle-check"></i>
        <div class="details">
            <h4>${title.value}</h4>
            <p>${description.value}</p>
            <button>${document.getElementById("priority").value}</button>
        </div>
        <div class="action">
            <i id="fa-circle-xmark" class="fa-regular fa-circle-xmark" "></i>
            <i id="fa-pen-to-square" class="fa-solid fa-pen-to-square" "></i>
        </div>
    </div>`

    }
    const tasks = document.getElementById("status").value
    if (tasks === "todo") {
        middleTodo.innerHTML += task();
    }
    if (tasks === "inprogress") {
        middleIn.innerHTML += task();
    }
    if (tasks === "stuck") {
        middleStuck.innerHTML += task();
    }
    if (tasks === "done") {
        middleDone.innerHTML += task();
    }
}

// addTask()

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function () {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
})

addTaskBtn.addEventListener("click", addTask)