import Item from './item';

export default class User {
  name: string;
  age: number;
  cart: Item[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  addToCart(item: Item) {
    this.cart.push(item);
  }
}
