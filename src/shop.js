import { Item } from './item.js';

export class Shop {
  constructor() {
    this.items = [
      new Item('item1', 'Item 1', 10),
      new Item('item2', 'Item 2', 20),
      new Item('item3', 'Item 3', 30),
    ];
  }

  displayItems() {
    const shopElement = document.getElementById('shop');
    
    this.items.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button class="add-to-cart" data-item-id="${item.id}">Add to Cart</button>
      `;
      shopElement.appendChild(itemElement);
    });
  }
}
