const addTaskBtn = document.getElementById("addTask");
const addingBtn = document.querySelectorAll(".adding-btn");
const title = document.getElementById("title");
const description = document.getElementById("description")
const middleTodo = document.getElementById("middle-todo");
const middleIn = document.getElementById("middle-inprogress");
const middleStuck = document.getElementById("middle-stuck");
const middleDone = document.getElementById("middle-done");
const priority = document.getElementById("priority");
const actions = document.createElement("div");
const editTask = document.getElementById("editTask")
actions.classList.add('actions');
const todoCount = document.getElementById("todo-count");
const todoIn = document.getElementById("in-count");
const todoStuck = document.getElementById("stuck-count");
const todoDone = document.getElementById("done-count");

function addBtn() {

    const card = document.createElement("div")
    card.classList.add('card');

    const actions = document.createElement("div");
    actions.classList.add('actions');
    const xmark = document.createElement("div");
    xmark.innerHTML = `<i id="fa-circle-xmark" class="fa-regular fa-circle-xmark"></i>`
    const pen = document.createElement("div");
    pen.innerHTML = ` <i id="fa-pen-to-square" class="fa-solid fa-pen-to-square"></i>`
    const correct = document.createElement("div");
    correct.innerHTML = `<i id="fa-circle-check" class="fa-regular fa-circle-check"></i>`
    correct.classList.add('correct');

    card.appendChild(correct);
    const details = document.createElement("div");

    details.classList.add('details');
    card.appendChild(details);

    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const levelBtn = document.createElement("button");
    h4.innerText = title.value;
    p.innerText = description.value;
    levelBtn.innerText = priority.value;

    details.appendChild(h4);
    details.appendChild(p);
    details.appendChild(levelBtn);

    actions.appendChild(xmark);
    actions.appendChild(pen);
    card.appendChild(actions)

    correct.addEventListener("click", function () {
        correct.style.backgroundColor = "black"
        correct.style.color = "white"
        const card = xmark.closest('.card');
        if (card) {
            middleDone.appendChild(card);
        }
        count()
    })


    const tasks = document.getElementById("status").value

    if (tasks === "todo") {
        middleTodo.appendChild(card)
        const modal = document.getElementById("modal");
        modal.style.display = "none";

    }
    if (tasks === "inprogress") {
        middleIn.appendChild(card)
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    if (tasks === "stuck") {
        middleStuck.appendChild(card)
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    if (tasks === "done") {
        middleDone.appendChild(card)
        const modal = document.getElementById("modal");
        modal.style.display = "none";
        correct.style.backgroundColor = "black"
        correct.style.color = "white"
    }
    else {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    xmark.addEventListener("click", function () {

        const card = xmark.closest('.card');
        if (card) {
            card.parentNode.removeChild(card);
        }

    });
    pen.addEventListener("click", function () {

        title.value = h4.textContent
        modal.style.display = "flex"
        const card = xmark.closest('.card');
        if (card) {
            card.parentNode.removeChild(card);
        }

    })
    count()

}
count()
function count() {

    todoCount.innerText = middleTodo.childElementCount;
    todoDone.innerText = middleDone.childElementCount;
    todoIn.innerText = middleIn.childElementCount;
    todoStuck.innerText = middleStuck.childElementCount;
}
addTaskBtn.addEventListener("click", addBtn);

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



