
import { Shop } from './shop.js';
import { User } from './User.js';


const shop = new Shop();
const user = new User();


shop.displayItems();

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  user.login(name, age);
  

  user.displayCart();
});


const shopElement = document.getElementById('shop');
shopElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart')) {
    const itemId = event.target.dataset.itemId;
    

    user.addToCart(itemId);
    
    user.displayCart();
  }
});
