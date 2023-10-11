import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private urlCol = 'http://localhost:3000/api/colaborador';

  constructor(private httpClient: HttpClient) { }

  obtenerColaboradores(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlCol);
  }
}
