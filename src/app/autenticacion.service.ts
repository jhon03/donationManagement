import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private isAutenticado = false;

  login(){
    //lógica de inicio de sesión, establecer isAutenteicado = true

  }

  logout(){
    //lógica de cierre de sesión, establecer isAutenticado = false
  }

  isAutenticadoColaborador(){
    return this.isAutenticado;
  }
  constructor() { }
}
