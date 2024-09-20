import "./style.css";
import { loadPizzaContent } from './pages/homepage';
import { loadAboutUsContent } from "./pages/aboutUs";

import { loadMenuContent } from './pages/menu';
const content = document.getElementById('content');
const home = document.getElementById('Home');
const menu = document.getElementById('Menu');
const about = document.getElementById('About');
loadPizzaContent();
home.addEventListener('click', () => {
  content.innerHTML = '';
  loadPizzaContent();
  
} );
menu.addEventListener('click', () => {
  content.innerHTML = '';
  loadMenuContent();
  
} );
about.addEventListener('click', () => {
  content.innerHTML = '';
  loadAboutUsContent();
  
} );



