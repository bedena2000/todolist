let todoListArray = [];

const todoListContainer = document.querySelector('.todo-list-container');


function TodoItem(title) {
  this.title = title;
  this.makeItem = function() {
    const todoItemElement = document.createElement('div');
    todoItemElement.classList.add('todo-item-element');
    const todoItemText = document.createElement('div');
    todoItemText.classList.add('todo-item-text');
    todoItemText.textContent = `${this.title}`;
    const todoItemIcon = document.createElement('button');
    todoItemIcon.classList.add('todo-item-delete-icon');
    todoItemIcon.textContent = 'delete';
    todoItemElement.appendChild(todoItemText);
    todoItemElement.appendChild(todoItemIcon);
    todoItemIcon.addEventListener('click', (event) => {
      deleteItem(todoItemElement);
    });
    return todoItemElement;
  }
};

function displayTodo(todoArray) {
  todoArray.forEach(item => {
    document.querySelector('.todo-list-container').append(item);
  });
}

function Data(dataValue) {
  const newTodoItem = new TodoItem(dataValue);
  todoListArray.push(newTodoItem.makeItem());
  displayTodo(todoListArray);
};

function deleteItem(item) {
  const itemTextContent = item.childNodes[0].textContent;
  // todoListArray = todoListArray.filter(todoItem => {
  //   todoItem.childNodes[0].textContent !== itemTextContent;
  //   console.log(todoItem.childNodes[0].textContent);
  //   console.log(itemTextContent);
  // });
  todoListArray = todoListArray.filter(newItem => !(newItem.childNodes[0].textContent === itemTextContent));
  clearTodoList();
  todoListArray.forEach(nodeItem => {
    document.querySelector('.todo-list-container').appendChild(nodeItem);
  });
  console.log(todoListArray);
};

function clearTodoList() {
  document.querySelector('.todo-list-container').innerHTML = ``;
};

export { Data, deleteItem };