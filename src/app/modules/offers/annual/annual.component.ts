import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../../cart-dialog/cart-dialog.component';
import { CartItem, CartService } from 'src/app/services/cart.service';
// export interface Product {
//   name: string;
//   price: number;
//   quantity: number;
//   imagePath: string;
// }


@Component({
  selector: 'app-annual',
  templateUrl: './annual.component.html',
  styleUrls: ['./annual.component.css']
})
export class AnnualComponent {
  panelOpenState = false;
  public payPalConfig?: IPayPalConfig;
  selectedPayment: string = ''; 
  showSuccess!: boolean;

  constructor(private cartService: CartService, public dialog: MatDialog,  ) { }
  productAnnual: CartItem = {
    name: 'Abonnement Annuel',
    price: 300,
    quantity: 1,
    imagePath: '../../../assets/homepage/paint-box.jpg'
  };

  ngOnInit(): void {
    this.initConfig();
  }
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
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
  selectPaymentMethod(method: string) {
    this.selectedPayment = method; // Mise à jour de la méthode de paiement sélectionnée
    console.log("Méthode de paiement sélectionnée: ", method);
  }
}
