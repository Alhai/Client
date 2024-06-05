import { CartItem, CartService } from 'src/app/services/cart.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  customerName = '';
  customerEmail = '';
  customerPhone = '';
  promoCode = ''; 
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.name);
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  placeOrder(): void {
    // Logic to place order
    console.log('Order placed');
  }

  applyPromoCode(): void {
    console.log('Promo code applied:', this.promoCode);
  }
}
