import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resModeloImg, urlImg } from '../../helpers/imageHelper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }


  uploadFile(imagen: FormData,relacion: string, uid: string):Observable<resModeloImg>{
    return this.httpClient.post<resModeloImg>(`${urlImg}/crear/${relacion}/${uid}`, imagen);
  }

  eliminarImg(relacion: string, uidImg:string):Observable<resModeloImg>{
    return this.httpClient.delete<resModeloImg>(`${urlImg}/eliminar/${relacion}/${uidImg}`);
  }

  eliminarImagenes(relacion:string, idRealacion: string): Observable<resModeloImg>{
    return this.httpClient.delete<resModeloImg>(`${urlImg}/eliminarAll/${relacion}/${idRealacion}`); 
  }

  actualizarImg(relacion: string, uidImg: string, imgNueva: FormData):Observable<resModeloImg>{
    return this.httpClient.put<resModeloImg>(`${urlImg}/actualizar/${relacion}/${uidImg}`, imgNueva);
  }
}
