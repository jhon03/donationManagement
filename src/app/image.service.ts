import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlImg } from './helpers/imageHelper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(formData: FormData, coleccion: string, uuid: string):Observable<any>{
    return this.httpClient.post<any>(`${urlImg}/${coleccion}/${uuid}`, formData);
  }
}
