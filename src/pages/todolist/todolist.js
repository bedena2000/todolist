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
  
  // Return Wrapper
  return todoListWrapper;
};

export default Todolist;