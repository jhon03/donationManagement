import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resModeloImg, urlImg } from '../../helpers/imageHelper';
import { Observable, tap } from 'rxjs';
import { TokenService } from 'src/app/security/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }


  public uploadFile(imagen: FormData,relacion: string, uid: string):Observable<resModeloImg>{
    return this.httpClient.post<resModeloImg>(`${urlImg}/crear/${relacion}/${uid}`, imagen, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
      console.log(body);
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    }));
  }

  public eliminarImg(relacion: string, uidImg:string):Observable<resModeloImg>{
    return this.httpClient.delete<resModeloImg>(`${urlImg}/eliminar/${relacion}/${uidImg}`, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
      console.log(body);
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    }));
  }

  public eliminarImagenes(relacion:string, idRealacion: string): Observable<resModeloImg>{
    return this.httpClient.delete<resModeloImg>(`${urlImg}/eliminarAll/${relacion}/${idRealacion}`, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
      console.log(body);
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    })); 
  }

  public actualizarImg(relacion: string, uidImg: string, imgNueva: FormData):Observable<resModeloImg>{
    return this.httpClient.put<resModeloImg>(`${urlImg}/actualizar/${relacion}/${uidImg}`, imgNueva, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    }));
  }
}
