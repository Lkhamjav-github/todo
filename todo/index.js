

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function () {
    const modal = document.getElementById("modal");
    modal.style.opacity = "1";
})
const addTask = document.getElementById("addTask");
addTask.addEventListener('click', function () {
    render();

})

// const middleTodo = document.getElementById("middle-todo");
// const middleIn = document.getElementById("middle-inprogress");
// const middleStuck = document.getElementById("middle-stuck");
// const middleDone = document.getElementById("middle-done");
// const title = document.getElementById("title");
// const description = document.getElementById("description")
