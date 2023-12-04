import {Component, OnInit} from '@angular/core';
import {Produit} from "../../classes/produit";
import {ProduitService} from "../../classes/produit.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  products: Produit[] = [];
  productOrders : any[]= [];

  constructor(private prodserv:ProduitService) {}

  ngOnInit() {
    this.loadProducts();
  }


  loadProducts() {
    this.prodserv.getAll()
      .subscribe({
        next: (products: any) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push({product:product,quantity:0});
          })
        },
        error: (e) => {
          console.log(e);
        },
      });
  }


}
