import Item from './item';
import User from './User';

export default class Shop {
  private loggedInUser: User | null = null;

  loginUser(user: User) {
    this.loggedInUser = user;
    console.log(`User ${user.name} logged in.`);
  }

  addItemToCart(item: Item) {
    if (this.loggedInUser) {
      this.loggedInUser.cart.push(item);
      console.log(`Item ${item.name} added to cart.`);
    } else {
      console.log('No user logged in.');
    }
  }
}
