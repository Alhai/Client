import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

export interface DialogData {
  cartItem: { name: string; price: number; quantity?: number, imagePath: string;  };
}

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cartService: CartService
  ) {}

  removeFromCart(): void {
    this.cartService.removeFromCart(this.data.cartItem.name);
    this.dialogRef.close('remove');
  }
}
