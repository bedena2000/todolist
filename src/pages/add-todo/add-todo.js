import './add-todo.css';

const addTodo = () => {
  // Add todo Modal
  const todoModal = document.createElement('div');
  todoModal.classList.add('todo-modal');
  // Add todo text
  const todoContentText = document.createElement('h3');
  todoContentText.classList.add('todo-content-text');
  todoContentText.textContent = 'Text';
  // Add todo input 
  const todoInput = document.createElement('input');
  todoInput.classList.add('todo-input');
  todoInput.placeholder = 'please add some text';
  
  todoModal.appendChild(todoContentText);
  todoModal.appendChild(todoInput);
  
  // Add item button
  const addItemButton = document.createElement('button');
  addItemButton.classList.add('add-item-button');
  addItemButton.textContent = 'Submit';
  
  addItemButton.addEventListener('click', (event) => {
    const inputValue = todoInput.value;
  });
  
  todoModal.appendChild(addItemButton);
  
  return todoModal;
};

export default addTodo;
