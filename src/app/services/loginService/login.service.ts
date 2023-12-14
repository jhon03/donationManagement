import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Credenciales, resLogin, urlAuth } from '../../helpers/loginHelpers';
import {Observable, tap, catchError, throwError, BehaviorSubject, timer, switchMap, Subscription} from 'rxjs';
import { TokenService } from '../../security/token/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {

  usuarioLogeado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  private urlAuth = urlAuth;
  private validacionSuscripcion: Subscription;

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private router:Router) { }
  
  ngOnDestroy(): void {
    this.validacionSuscripcion?.unsubscribe();
  }

  public login(credenciales:Credenciales): Observable<any>{
    return this.httpClient.post<any>(`${this.urlAuth}/login`, credenciales, {
      observe: 'response',
    }).pipe(tap((response:any) =>{
      if(response.status == 200){
        this.iniciarValidacionAct(62);
        this.tokenService.getHeaders(response);
        this.usuarioLogeado.next(true);
      }
    }));
  }

  public validarSesionUsuario(): Observable<{msg: string}>{
    return this.httpClient.get<{msg: string}>(`${urlAuth}/validar/Token/Sesion`);
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
    if(this.validacionSuscripcion){
      this.validacionSuscripcion.unsubscribe();
    }
  }


  private iniciarValidacionAct(intervaloMinutos: number){
    const intervaloMilisegundos = intervaloMinutos * 60 * 1000;
    const source = timer(0, intervaloMilisegundos);
    console.log(source);
    this.validacionSuscripcion = source.pipe(
      switchMap( () => this.validarSesionUsuario() )
    ).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>{
        console.log(error),
        Swal.fire('sesion inactiva, se cierra su session');
        this.loggout();
      }
    })
  }
}
