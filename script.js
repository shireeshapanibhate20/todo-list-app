window.onload = function () {
    loadTasks();
};

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    saveTask(task);
    displayTask(task);

    input.value = "";
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTask(task) {
    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    let btn = document.createElement("button");
    btn.innerText = "❌";

    btn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
        deleteTask(task);
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        displayTask(task);
    });
}

function deleteTask(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(task => task !== taskToDelete);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}