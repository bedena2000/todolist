import './todolist.css';

const Todolist = () => {
  // Make Todo List Container
  const todoListWrapper = document.createElement('div');
  todoListWrapper.classList.add('todo-list-wrapper');
  // Make Container
  const containerElement = document.createElement('div');
  containerElement.classList.add('container');
  containerElement.classList.add('todo-list-container');
  todoListWrapper.appendChild(containerElement);
  // !!! Todo Item
  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('todo-item-element');
  // Todo Item Text
  const todoItemText = document.createElement('div');
  todoItemText.classList.add('todo-item-text');
  todoItemText.textContent = 'AnyText';
  todoItemElement.appendChild(todoItemText);
  // Todo Item Delete Icon
  const todoItemDeleteIcon = document.createElement('i');
  todoItemDeleteIcon.classList.add('todo-item-delete-icon');
  todoItemDeleteIcon.classList.add('fa-solid');
  todoItemDeleteIcon.classList.add('fa-trash');
  todoItemElement.appendChild(todoItemDeleteIcon);
  
  containerElement.appendChild(todoItemElement);
  
  // Return Wrapper
  return todoListWrapper;
};

export default Todolist;