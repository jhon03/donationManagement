import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciales, urlAuth } from './helpers/loginHelpers';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlAuth = urlAuth;

  constructor(private httpClient: HttpClient) { }

  login(credenciales:Credenciales): Observable<any>{
    return this.httpClient.post<Credenciales>(`${this.urlAuth}/login`, credenciales);
  }

}
