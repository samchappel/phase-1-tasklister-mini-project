// DOM Selectors
const form = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')
const newTaskDescription = document.querySelector('#new-task-description')
// Event listeners
form.addEventListener('submit', addTask)
// Event handlers
function addTask(event) {
  event.preventDefault()
  console.log('description: ', newTaskDescription.value);
  console.log(event.target["new-task-description"].value)
  renderTask(event.target["new-task-description"].value)
  form.reset()
}
function editTask(e, li){
  e.preventDefault()
  li.textContent = e.target.editTask.value
  const deleteBtn = li.querySelector(':nth-child(1)')
  const editBtn = li.querySelector(':nth-child(2)')
  console.log('deleteBtn: ', deleteBtn)
  li.textContent = e.target.editTask.value
  li.append(deleteBtn, editBtn)
}
// Render functions
function renderTask(taskString){
  // element creations
  const newTask = document.createElement('li')
  const deleteBtn = document.createElement('button')
  const editBtn = document.createElement('button')
  // asign values and attributes
  newTask.textContent = taskString
  deleteBtn.textContent = 'X'
  deleteBtn.style.color = 'red'
  editBtn.textContent = 'Edit'
  //appending
  newTask.append(deleteBtn, editBtn)
  taskList.appendChild(newTask)
  // event listeners
  deleteBtn.addEventListener('click', () => newTask.remove())
  editBtn.addEventListener('click', () => renderEditForm(newTask))
}
function renderEditForm(li, taskString){
  console.log('li: ', li)
  const editForm = document.createElement('form')
  const inputField = document.createElement('input')
  const submitBtn = document.createElement('button')
  inputField.type = 'text'
  inputField.name = 'editTask'
  inputField.placeholder = taskString
  submitBtn.type = 'submit'
  submitBtn.textContent = 'Change'
  editForm.append(inputField, submitBtn)
  li.append(editForm)
  editForm.addEventListener('submit', (e) => editTask)
}
