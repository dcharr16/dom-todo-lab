console.log('test')

// Cached elements
const inputEl = document.getElementById('item-input')


const addItemBtn = document.getElementById('submit-button')

const listEl = document.getElementById('todo-list')

// Event listners


addItemBtn.addEventListener('click', function(evt){
if(inputEl.value === "") return
const newListItem =document.createElement('li')
newListItem.textContent = inputEl.value
listEl.appendChild(newListItem)
inputEl.value = ""
})



