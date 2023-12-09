import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    const token = this.tokenService.getToken();

    if(token){
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

  

