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

  openLoginDialog() {
  }

  placeOrder() {
  }

  applyPromoCode() {
 
    console.log('Promo code applied:', this.promoCode);
  }
}
