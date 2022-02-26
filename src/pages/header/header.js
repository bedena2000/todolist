import './header.css';

const Header = () => {
  
  // Make Header Wrapper
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');
  // Make Header Title
  const headerTitle = document.createElement('h2');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'Todo';
  headerElement.appendChild(headerTitle);
  
  return headerElement;
};

export default Header;