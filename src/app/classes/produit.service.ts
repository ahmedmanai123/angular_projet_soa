import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produit} from "./produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiURL = 'https://backend-ecommerce-jwt-2024.vercel.app/api'

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    })

  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/articles/')



      .pipe(

        catchError(this.errorHandler)

      )

  }

  find(_id:object): Observable<any> {



    return this.httpClient.get(this.apiURL + '/articles/' + _id)



      .pipe(

        catchError(this.errorHandler)

      )

  }


  errorHandler(error:any) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

  }



}
