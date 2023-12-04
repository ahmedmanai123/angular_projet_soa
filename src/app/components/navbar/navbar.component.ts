import {Component, ViewChild} from '@angular/core';
import {PanierComponent} from "../panier/panier.component";
import {ProduitComponent} from "../produit/produit.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC!: ProduitComponent

  @ViewChild('shoppingCartC')
  shoppingCartC!: PanierComponent;


  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: any) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
  }


}
