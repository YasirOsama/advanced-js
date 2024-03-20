function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item
    var taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = '<input type="checkbox" onclick="toggleTask(this)"> ' + taskText + ' <button onclick="deleteTask(this)">Delete</button>';

    // Append the task item to the list
    var taskList = document.getElementById("taskList");
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

function toggleTask(checkbox) {
    var taskItem = checkbox.parentNode;
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
}