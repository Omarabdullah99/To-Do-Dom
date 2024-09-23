// const newTask= document.querySelector('#new-task')
// const form= document.querySelector('form')
// const incompleteUL= document.querySelector('#items')
// const completeUL= document.querySelector('.complete-list ul')


// const createTask= function(task){
//     const listItem= document.createElement('li')
//     const checkboxInput= document.createElement('input')
//     const label= document.createElement('label')

//     label.innerText= task;
//     checkboxInput.type='checkbox'

//     listItem.appendChild(checkboxInput)
//     listItem.appendChild(label)

//     checkboxInput.addEventListener('change', function(){
//         if(checkboxInput.checked){
//             completeTask(listItem)
//         } else{
//             uncompleteTassk(listItem)
//         }
//     })

//     return listItem

// }

// const addTask= function(event){
//     event.preventDefault()

//     if(newTask.value.trim() !== ""){
//         const listItem= createTask(newTask.value)
//         incompleteUL.appendChild(listItem)
//         newTask.value= ""
//     }

// }

// const completeTask= function(listItem){
//     const createDeleteBtn= document.createElement('button')
//     createDeleteBtn.innerText = 'Delete';
//     createDeleteBtn.className = 'delete';

//     listItem.appendChild(createDeleteBtn)

//      // Add delete functionality
//      createDeleteBtn.addEventListener('click', function() {
//         completeUL.removeChild(listItem);
//     });
    
//      // Check if listItem is still in the incompleteUL before removing it
//      if (incompleteUL.contains(listItem)) {
//         incompleteUL.removeChild(listItem);
//     }

//     completeUL.appendChild(listItem)
// }
// const uncompleteTassk=function(listItem){
//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.checked = false; // uncheck the box

//     let deleteBtn = listItem.querySelector('.delete');
//     if (deleteBtn) {
//         listItem.removeChild(deleteBtn); // remove delete button
//     }

//     incompleteUL.appendChild(listItem)
//     completeUL.removeChild(listItem)

    
// }
// // Add task to the list on form submit
// form.addEventListener('submit', addTask);


// select elements & assign them to variables
let newTask = document.querySelector('#new-task'); //input
let form = document.querySelector('form'); //form
let todoUl = document.querySelector('#items'); // Incomplete Tasks
let completeUl = document.querySelector('.complete-list ul'); // Completed Tasks

let createTask = function(task) {
    let listItem = document.createElement('li'); // Creates a new <li> element.
    let checkBox = document.createElement('input'); // Creates a new <input> element (checkbox).
    let label = document.createElement('label'); // Creates a new <label> element.

    label.innerText = task; // Sets the text of the label to the task that was passed as a parameter.
    checkBox.type = 'checkbox'; // Sets the input type to 'checkbox'.

    listItem.appendChild(checkBox); // Adds the checkbox to the list item.
    listItem.appendChild(label); // Adds the label to the list item.

    return listItem; // Returns the list item to be used later.
}


let addTask = function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page when submitted.
    let listItem = createTask(newTask.value); // Calls the createTask function to create a new list item with the task.
    todoUl.appendChild(listItem); // Adds the new task to the 'Incomplete Tasks' list (`#items`).
    newTask.value = ""; // Clears the input field after the task is added.

    // Bind the checkbox of the newly created task to the completeTask function
    bindIncompleteTask(listItem); 
}

let completeTask = function() {
    let listItem = this.parentNode; // Gets the parent <li> of the checkbox (the task).
    listItem.removeChild(this); // Removes the checkbox from the task, as it is no longer needed in the completed list.

    let deleteButton = document.createElement('button'); // Creates a new button element.
    deleteButton.innerText = 'Delete'; // Sets the button text to 'Delete'.
    deleteButton.className = 'delete'; // Adds the 'delete' class to the button.
    listItem.appendChild(deleteButton); // Adds the delete button to the list item.
    completeUl.appendChild(listItem); // Moves the task to the "Completed Tasks" list (`completeUl`).

    // Bind the delete button to the deleteTask function
    bindCompleteTask(listItem);
}

let deleteTask = function() {
    let listItem = this.parentNode; // Gets the parent <li> of the delete button.
    listItem.parentNode.removeChild(listItem); // Removes the entire task (list item) from the list.
}


let bindIncompleteTask = function(taskItem) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]'); // Finds the checkbox in the list item.
    checkBox.onchange = completeTask; // Sets the `onchange` event of the checkbox to call the `completeTask` function.
}

let bindCompleteTask = function(taskItem) {
    let deleteButton = taskItem.querySelector('.delete'); // Finds the delete button in the list item.
    deleteButton.onclick = deleteTask; // Sets the `onclick` event of the button to call the `deleteTask` function.
}


// static er upor apply


form.addEventListener('submit', addTask);
