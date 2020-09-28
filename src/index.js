console.log('32332');

import { renderLanding } from './renderHomePage';
import { renderHome } from './renderHome';
import { renderContact } from './renderContact';
import { renderMenu } from './renderMenu';

renderLanding();

let navButtons = document.querySelectorAll('[data-navigation]');
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.navigation === 'home') {
      renderHome();
    }
    if (button.dataset.navigation === 'menu') {
      renderMenu();
    }
    if (button.dataset.navigation === 'contact') {
      renderContact();
    }
  });
});
