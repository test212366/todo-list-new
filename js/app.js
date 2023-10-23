function createTodoItem(title) {
	const checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.className = 'checkbox'

	const label = document.createElement('label')
	label.innerText = title 
	label.className = 'title'

	const editInput = document.createElement('input')
	editInput.type = 'text'
	editInput.className = 'textfield'

	const editButton = document.createElement('button')
	editInput.innerText = 'change'
	editInput.className = 'edit'

	const deleteButton = document.createElement('button')
	editInput.innerText = 'delete'
	editInput.className = 'delete'

	const listItem = document.createElement('li')
	listItem.className = 'todo-item'

	listItem.appendChild(checkbox)
	listItem.appendChild(label)
	listItem.appendChild(editInput)
	listItem.appendChild(editButton)
	listItem.appendChild(deleteButton)

	return listItem
}


function addTodoItem(event) {
	event.preventDefault()

	if (addInput.value === '') {
		return alert('Err name')
	}
	const listItem = createTodoItem(addInput.value)
}



const todoForm = document.getElementById('todo-form')
const addInput = document.getElementById('add-input')
const todoList = document.getElementById('todo-list')
const todoItems = document.querySelectorAll('.todo-item')


todoForm.addEventListener('submit', addTodoItem())