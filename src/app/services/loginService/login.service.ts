import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciales, urlAuth } from '../../helpers/loginHelpers';
import {Observable, tap, catchError, throwError, BehaviorSubject} from 'rxjs';
import { TokenService } from '../../security/token/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogeado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  private urlAuth = urlAuth;

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private router:Router) { }

  login(credenciales:Credenciales): Observable<any>{
    return this.httpClient.post<Credenciales>(`${this.urlAuth}/login`, credenciales, {
      observe: 'response',
    }).pipe(tap((response:any) =>{
      if(response.status == 200){
        this.tokenService.getHeaders(response);
        this.usuarioLogeado.next(true);
      }
    }));
  }


  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.log('se ha producido un erroren el backend ', error.error);
    }

    console.log('backen retorno el codigo de estado ', error.status, error.error);
    return throwError(() => error);
  }

  get userLogin(): Observable<boolean>{
    return this.usuarioLogeado.asObservable();
  }

  isLogged(): boolean{
    if(this.tokenService.getToken()){
      return true;
    }
    return false;
  }

  loggout(){
    localStorage.removeItem('token');
    this.usuarioLogeado.next(false);
    this.router.navigateByUrl('/login');    ///ruta para redireccionar al usuario despues de cerrar sesion
  }
}
