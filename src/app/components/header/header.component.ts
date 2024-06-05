import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isMenuOpen = false;  
  numberOfItemsInCart: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCurrentItemCount().subscribe((count: number) => {
      console.log('Cart count updated:', count);
      this.numberOfItemsInCart = count;
    });
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
