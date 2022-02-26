const bodyElement = document.querySelector('body');
bodyElement.addEventListener('click', (event) => {
  const eventClassList = Array.from(event.target.classList);
  if(eventClassList.includes('black-background')) {
    const deleteItem = document.querySelector('.black-background');
    const deleteItem2 = document.querySelector('.todo-modal');
    bodyElement.removeChild(deleteItem);
    bodyElement.removeChild(deleteItem2);
  };
});
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';

// Pages
import Header from './pages/header/header.js';
import Button from './pages/button/button.js';
import TodoList from './pages/todolist/todolist.js';
import addTodo from './pages/add-todo/add-todo.js';
import blackBackground from './pages/black-background/black-background.js';
import './index.css';

document.querySelector('body').appendChild(addTodo());
document.querySelector('body').appendChild(blackBackground());

// Render Pages
document.querySelector('body').appendChild(Header());
document.querySelector('body').appendChild(Button());
document.querySelector('body').appendChild(TodoList());




