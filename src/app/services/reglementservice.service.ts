import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Reglement } from '../models/reglement';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ReglementserviceService {
private apiUrl='http://localhost:8089/api/reglements';
  constructor(private http: HttpClient) { }
   
getAllReglement():Observable<Reglement[]>{
  return this.http.get<Reglement[]>(this.apiUrl+'/all');
}
getReglementsByClientId(clientId :number):Observable<Reglement[]>{
  return this.http.get<Reglement[]>(`${this.apiUrl}/byClientId/${clientId}`);
}
getReglementById(reglementId: number): Observable<Reglement[]> {
  return this.http.get<Reglement[]>(`${this.apiUrl}/${reglementId}`);
}

payReglement(reglementId: number): Observable<Reglement[]> {
  return this.http.post<Reglement[]>(`${this.apiUrl}/pay/${reglementId}`, {});
}

payAllReglementsByClientId(clientId: number): Observable<void> {
  return this.http.post<void>(`${this.apiUrl}/payAll/${clientId}`, {});
}

getClientDetails(clientId: number): Observable<Client[]> {
  return this.http.get<Client[]>(`${this.apiUrl}/clientDetails/${clientId}`);
}
getClientparmotpass(email: string, password: string): Observable<any> {
  
  const url = `${this.apiUrl}/getClientparmotpass`;
  return this.http.get(url, { params: { email, password } });
}
private apiUrl1 = 'http://localhost:8089/api/reglements/getClientparmotpass'; 
getClientByEmail(email: string, password: string): Observable<any> {
  const url = `${this.apiUrl1}?email=${email}&motdepass=${password}`;
  return this.http.get(url, { withCredentials: true });
}
}
