import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionReglementComponent } from './Component/gestion-reglement/gestion-reglement.component';
import { GestionFactureComponent } from './Component/gestion-facture/gestion-facture.component';
import { ModePaymentComponent } from './Component/mode-payment/mode-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { SidBarComponent } from './Component/sid-bar/sid-bar.component';
import { LoginComponent } from './Component/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    GestionReglementComponent,
    GestionFactureComponent,
    ModePaymentComponent,
    SidBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
