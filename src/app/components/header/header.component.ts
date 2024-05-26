import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isMenuOpen = false; // Gère l'état d'ouverture du menu

  // Fonction pour ouvrir le menu
  openMenu() {
    this.isMenuOpen = true;
  }

  // Fonction pour fermer le menu
  closeMenu() {
    this.isMenuOpen = false;
  }
}
