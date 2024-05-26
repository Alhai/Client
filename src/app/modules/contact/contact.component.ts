import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    console.log('Formulaire soumis');
    // Implémentez la logique de soumission du formulaire ici
  }
}
