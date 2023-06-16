import { User } from './User.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const name = nameInput.value;
    const age = ageInput.value;

    const user = new User(name, age);
    user.sayHello();
  });
});
