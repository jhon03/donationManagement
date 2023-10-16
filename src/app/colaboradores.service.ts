import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColaboradorRequest, ColaboradorResponse, urlColaborador } from './helpers/colaboradoresHelpers';


@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private urlCol = urlColaborador;

  constructor(private httpClient: HttpClient) { }

  obtenerColaboradores(): Observable<ColaboradorResponse[]>{
    return this.httpClient.get<ColaboradorResponse[]>(this.urlCol);
  }

  crearColaborador(colaborador: ColaboradorRequest): Observable<ColaboradorResponse>{
    return this.httpClient.post<ColaboradorResponse>(this.urlCol, colaborador)
  }
}
