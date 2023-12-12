import { HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  constructor() { }

  public getToken(){
    return localStorage.getItem('token');
  }

  public getHeaders(response:any): void {
    const tokenH = response.body.token

    if(tokenH){
      localStorage.setItem('token', tokenH);
    }
  }

  public obtenerTokenRenovado(body: any): void {
    const tokenRenovado = body.tokenNuevo;
    if(tokenRenovado){
      localStorage.setItem('token', tokenRenovado);
    }
  }

  private decodeTokenPayload(token: string): any |null{        //este metodo se utiliza poara decodificar token en respuestas
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      return null;      
    }
  }

  istokenExpired(token: string): boolean{
    try {
      const decodeToken = jwt_decode.jwtDecode(token);
      console.log(`token decodificado: ${JSON.stringify(decodeToken) }`);
      const expirationDate = decodeToken.exp;
      console.log(`expiracion del token: ${expirationDate}`);
      const currentTime = Date.now() / 1000;    // Obtener la hora actual
      console.log(`hora actual: ${currentTime}\ntoken invalido: ${currentTime > expirationDate}`);      
      return currentTime > expirationDate;
    } catch (error) {
      console.log('token inavalido: ' + error);
      return true;
    }
  }





}

