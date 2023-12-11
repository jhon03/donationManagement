import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

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
}

