// ===============================
// 1. GET HTML ELEMENTS
// ===============================

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");

let taskList = document.getElementById("taskList");

let allBtn = document.getElementById("allBtn");
let activeBtn = document.getElementById("activeBtn");
let completedBtn = document.getElementById("completedBtn");

let taskCounter = document.getElementById("taskCounter");
let clearCompleted = document.getElementById("clearCompleted");


// ===============================
// 2. TASK ARRAY
// ===============================

// Try to get old tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ===============================
// 3. DISPLAY TASKS
// ===============================

function displayTasks(filter = "all") {

    // Empty the list first
    taskList.innerHTML = "";

    // Decide which tasks to show
    let filteredTasks = tasks;

    if (filter === "active") {
        filteredTasks = tasks.filter(function(task) {
            return task.completed === false;
        });
    }

    if (filter === "completed") {
        filteredTasks = tasks.filter(function(task) {
            return task.completed === true;
        });
    }


    // Create HTML for every task
    filteredTasks.forEach(function(task) {

        let li = document.createElement("li");

        li.classList.add("task");

        if (task.completed) {
            li.classList.add("completed");
        }


        // Left side
        let leftSide = document.createElement("div");

        leftSide.classList.add("task-left");


        // Checkbox
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        // Task text
        let text = document.createElement("span");

        text.classList.add("task-text");

        text.textContent = task.text;


        // Delete button
        let deleteBtn = document.createElement("button");

        deleteBtn.classList.add("delete-btn");

        deleteBtn.textContent = "✕";


        // Put checkbox and text inside leftSide
        leftSide.appendChild(checkbox);

        leftSide.appendChild(text);


        // Put everything inside li
        li.appendChild(leftSide);

        li.appendChild(deleteBtn);


        // Put li inside ul
        taskList.appendChild(li);


        // ===============================
        // COMPLETE TASK
        // ===============================

        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            saveTasks();

            displayTasks(filter);

        });


        // ===============================
        // DELETE TASK
        // ===============================

        deleteBtn.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {
                return item !== task;
            });

            saveTasks();

            displayTasks(filter);

        });

    });


    // Update counter
    updateCounter();
}


// ===============================
// 4. ADD TASK
// ===============================

addTaskBtn.addEventListener("click", function() {

    let taskText = taskInput.value.trim();


    // Don't allow empty tasks
    if (taskText === "") {
        return;
    }


    // Create new task object
    let newTask = {
        text: taskText,
        completed: false
    };


    // Add task to array
    tasks.push(newTask);


    // Save tasks
    saveTasks();


    // Clear input
    taskInput.value = "";


    // Display tasks
    displayTasks();

});


// ===============================
// 5. ENTER KEY
// ===============================

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTaskBtn.click();
    }

});


// ===============================
// 6. SAVE TO LOCAL STORAGE
// ===============================

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// ===============================
// 7. TASK COUNTER
// ===============================

function updateCounter() {

    let activeTasks = tasks.filter(function(task) {

        return task.completed === false;

    });


    let count = activeTasks.length;


    taskCounter.textContent = count + " items left";

}


// ===============================
// 8. FILTER: ALL
// ===============================

allBtn.addEventListener("click", function() {

    displayTasks("all");

    allBtn.classList.add("active");

    activeBtn.classList.remove("active");

    completedBtn.classList.remove("active");

});


// ===============================
// 9. FILTER: ACTIVE
// ===============================

activeBtn.addEventListener("click", function() {

    displayTasks("active");

    activeBtn.classList.add("active");

    allBtn.classList.remove("active");

    completedBtn.classList.remove("active");

});


// ===============================
// 10. FILTER: COMPLETED
// ===============================

completedBtn.addEventListener("click", function() {

    displayTasks("completed");

    completedBtn.classList.add("active");

    allBtn.classList.remove("active");

    activeBtn.classList.remove("active");

});


// ===============================
// 11. CLEAR COMPLETED
// ===============================

clearCompleted.addEventListener("click", function() {

    tasks = tasks.filter(function(task) {

        return task.completed === false;

    });


    saveTasks();

    displayTasks();

});


// ===============================
// 12. LOAD TASKS WHEN PAGE OPENS
// ===============================

displayTasks();