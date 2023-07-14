// Get necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add" button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        // Add event listener to the delete button
        deleteBtn.addEventListener('click', deleteTask);

        // Append the new elements to the list item
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}
