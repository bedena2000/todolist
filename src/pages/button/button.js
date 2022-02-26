import './button.css';
import addTodo from '../add-todo/add-todo.js';
import blackBackground from '../black-background/black-background.js';

const Button = () => {
  // Create Button Wrapper
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  // Create Button
  const todoButton = document.createElement('button');
  todoButton.classList.add('todo-button');
  todoButton.textContent = 'add item';
  todoButton.addEventListener('click', (event) => {
    let addTodoElement = addTodo();
    let blackBackgroundElement = blackBackground();
    addTodoElement.classList.toggle('show-block');
    blackBackgroundElement.classList.toggle('show-block');
    console.log(addTodoElement);
    console.log(blackBackgroundElement);
    document.querySelector('body').appendChild(addTodoElement);
    document.querySelector('body').appendChild(blackBackgroundElement);
  });
  buttonWrapper.appendChild(todoButton);
  
  return buttonWrapper;
};

export default Button;