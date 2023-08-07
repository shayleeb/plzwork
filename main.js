const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

// Task Removal
addTaskBtn.addEventListener("click", () => {
    // ... (existing code)

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        const deleteBTN = document.createElement("button");
        deleteBTN.innerText = "Delete";
        deleteBTN.addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

// Task Completion
addTaskBtn.addEventListener("click", () => {
    // ...(existing code)

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

});

// Load tasks from local storage on page load
window.addEventListener("load", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(savedTask => {
        const taskItem = document.createElement("li");
        taskItem.innerText = savedTask.text;
        if (savedTask.completed) {
            taskItem.classList.add("completed");
        }
        taskList.appendChild(taskItem);
    });

});
