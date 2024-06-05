import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  imagePath: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {
    this.loadInitialCart();
  }

  private loadInitialCart() {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.updateCart();
    }
  }

  getItems(): CartItem[] {
    return this.cart;
  }

  addToCart(item: CartItem) {
    const foundItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.updateCart();
  }

  removeFromCart(itemName: string) {
    const index = this.cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
      this.updateCart();
    }
  }

  private updateCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
    this.updateCartItemCount();
  }

  private updateCartItemCount() {
    const totalItems = this.cart.reduce((sum, current) => sum + current.quantity, 0);
    this.cartItemCount.next(totalItems);
  }

  getCurrentItemCount() {
    return this.cartItemCount.asObservable();
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }
}
