import { CartItem, CartService } from 'src/app/services/cart.service';

import { CartDialogComponent } from '../../cart-dialog/cart-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trimonthly',
  templateUrl: './trimonthly.component.html',
  styleUrls: ['./trimonthly.component.css']
})
export class TrimonthlyComponent {  
  panelOpenState = false;
  selectedPayment: string = ''; 
  showSuccess!: boolean;

  constructor(private cartService: CartService, public dialog: MatDialog,  ) { }
  trimonthlyProduct : CartItem = {
    name: 'Abonnement de trois mois',
    price: 90,
    quantity: 1,
    imagePath: '../../../../assets/homepage/wool-box.jpg'
  };


  buyBox(product : CartItem): void {
    const cartItem: CartItem = {
      name: product.name,
      price: product.price,
      quantity: 1,
      imagePath: product.imagePath
    };
    this.cartService.addToCart(cartItem);
    this.openDialog(cartItem);
  }

  openDialog(product : CartItem): void {
    let dialogRef = this.dialog.open(CartDialogComponent, {
      width: '400px',
      height: '180px',
      position: { top: '0', right: '0' },
      data: { 
        cartItem: {
          name: product.name,
          price: product.price,
          quantity: 1, 
          imagePath: product.imagePath  
        }
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'checkout') {
        // Logic for checkout
        console.log('Go to checkout');
      } else if (result === 'continue') {
        // Logic to continue shopping
        console.log('Continue shopping');
      } else if (result === 'remove') {
        // Logic to remove item from cart
        console.log('Item removed');
      }
    });
  }
  

}
