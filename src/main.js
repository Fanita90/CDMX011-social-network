// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';
import { profile } from './components/profile.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/profile': profile,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  if (rootDiv) {
    while (rootDiv.firstChild) { // Mientras contenga informacion
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[pathname]()); // () 'La función'
  }
};

const component = routes[window.location.pathname];
window.onload = () => {
  rootDiv.appendChild(component());
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

// Este es el punto de entrada de tu aplicacion
// const database = firebase.firestore();
// console.log(database);
