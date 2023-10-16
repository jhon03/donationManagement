import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getToken(){
    return localStorage.getItem('token');
  }

  public getHeaders(response:any){
    const tokenH = response.body.token

    if(tokenH){
      localStorage.setItem('token', tokenH);
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

