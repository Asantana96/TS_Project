import User from './User';
import Item from './item';

const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const shopContainer = document.getElementById('shop') as HTMLDivElement;
const cartContainer = document.getElementById('cart') as HTMLDivElement;

loginForm.addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event: Event) {
  event.preventDefault();
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const ageInput = document.getElementById('age') as HTMLInputElement;

  const name = nameInput.value;
  const age = Number(ageInput.value);

  const user = new User(name, age);
  renderShop(user);
}

function renderShop(user: User) {
  shopContainer.innerHTML = '';

  const items = [
    new Item('Apple', 0.99),
    new Item('Banana', 0.75),
    new Item('Orange', 1.25),
  ];

  const addToCartHandler = (item: Item) => {
    user.addToCart(item);
    renderCart(user);
  };

  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
    const addToCartButton = itemElement.querySelector('.add-to-cart') as HTMLButtonElement;
    addToCartButton.addEventListener('click', () => addToCartHandler(item));
    shopContainer.appendChild(itemElement);
  });
}

function renderCart(user: User) {
  cartContainer.innerHTML = '';

  const cartTitle = document.createElement('h2');
  cartTitle.textContent = 'Shopping Cart';
  cartContainer.appendChild(cartTitle);

  if (user.cart.length === 0) {
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = 'Your cart is empty.';
    cartContainer.appendChild(emptyCartMessage);
  } else {
    const cartItemsList = document.createElement('ul');
    user.cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(cartItem);
    });
    cartContainer.appendChild(cartItemsList);
  }
}
