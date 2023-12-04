import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {ListProductComponent } from './components/list-product/list-product.component';
import {ProduitComponent } from './components/produit/produit.component';
import {PanierComponent } from './components/panier/panier.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProductComponent,
    ProduitComponent,
    PanierComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
