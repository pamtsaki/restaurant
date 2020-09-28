import { renderHome } from './renderHome';

const wrapper = document.querySelector('#wrapper');

function renderWrapper() {
  let nav = document.createElement('nav');
  nav.innerHTML = `<div class="nav-buttons">
  <button class="nav-button" data-navigation="home">Home</button>
  <button class="nav-button" data-navigation="menu">Menu</button>
  <button class="nav-button" data-navigation="contact">Contact</button>
</div>
`;
  wrapper.appendChild(nav);
  let main = document.createElement('main');
  main.classList.add('wrapper-content');
  wrapper.appendChild(main);
  renderHome();
}
function renderLanding() {
  renderWrapper();
}
export { renderLanding };
