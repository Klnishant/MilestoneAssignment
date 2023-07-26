const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', function () {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
});
