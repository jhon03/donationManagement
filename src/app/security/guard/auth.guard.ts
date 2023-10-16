import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router :Router, private tokenService:TokenService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.tokenService.getToken()){
      return true;
    }
    this.router.navigate(['/']);    //si no esta logeado redireccionarlo a esta ruta
    return false;
  }


}
