import "regenerator-runtime"; /* for async await transpile */
import "../styles/uglifyStyle.css";
import App from './views/app';
import swRegister from './utils/sw-register';
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// script navigasi drawer
const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
