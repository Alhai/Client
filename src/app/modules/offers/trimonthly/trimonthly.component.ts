import { Component } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-trimonthly',
  templateUrl: './trimonthly.component.html',
  styleUrls: ['./trimonthly.component.css']
})
export class TrimonthlyComponent {
  panelOpenState = false;
  public payPalConfig?: IPayPalConfig;
  
  selectedPayment: string = ''; // Variable pour garder trace du paiement sélectionné
  showSuccess!: boolean;

  ngOnInit(): void {
    this.initConfig();
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
