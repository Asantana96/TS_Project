export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

export class User {
    constructor() {
      this.name = null;
      this.age = null;
      this.cart = [];
    }
  
    login(name, age) {
      this.name = name;
      this.age = age;
      console.log(`Logged in as ${this.name} (${this.age} years old)`);
    }
  
    addToCart(itemId) {
      const item = this.findItemById(itemId);
      if (item) {
        this.cart.push(item);
        console.log(`${item.name} added to cart`);
      }
    }
  
    findItemById(itemId) {

      return shop.items.find((item) => item.id === itemId);
    }
  
    displayCart() {
      const cartElement = document.getElementById('cart');
      cartElement.innerHTML = '';
  
      const cartHeading = document.createElement('h2');
      cartHeading.textContent = 'Cart';
      cartElement.appendChild(cartHeading);
  
      if (this.cart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty';
        cartElement.appendChild(emptyCartMessage);
      } else {
        const cartList = document.createElement('ul');
        
        this.cart.forEach((item) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.name} - $${item.price}`;
          cartList.appendChild(listItem);
        });
        
        cartElement.appendChild(cartList);
      }
    }
  }
  