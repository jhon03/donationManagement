import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnDestroy {

  constructor(private tokenService: TokenService, private loginService: LoginService) {}
  
  ngOnDestroy(): void {
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    const token = this.tokenService.getToken();

    if(token){
      if(this.tokenService.istokenExpired(token)){
        Swal.fire('cuenta inactiva, se cierra su sesion por seguridad');
        this.loginService.loggout();
      }
      const cloned = request.clone({
        setHeaders: {
          'x-token': token
        }
      });

      // Imprimir en la consola si el encabezado 'x-token' está presente
      if (cloned.headers.has('x-token')) {
        console.log('El encabezado x-token se incluye en la solicitud:', cloned.headers.get('x-token'));
      }

      return next.handle(cloned);

    }

    return next.handle(request);
  }
}

export const AuthInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS ,
    useClass: AuthInterceptor ,
    multi   : true
  }
]

  

