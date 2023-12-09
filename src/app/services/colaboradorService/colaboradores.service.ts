import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColaboradorRequest, ColaboradorResponse, resColaborador, urlColaborador } from '../../helpers/colaboradoresHelpers';


@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private urlCol = urlColaborador;

  constructor(private httpClient: HttpClient) { }

  public obtenerColaboradores(): Observable<ColaboradorResponse[]>{
    return this.httpClient.get<ColaboradorResponse[]>(this.urlCol);
  }

  public crearColaborador(colaborador: ColaboradorRequest): Observable<resColaborador>{
    return this.httpClient.post<resColaborador>(this.urlCol, colaborador)
  }

  public confirmarCorreoCol(correo: string, codigo: string): Observable<resColaborador>{
    return this.httpClient.post<resColaborador>(`${urlColaborador}/verificar/correo`, {correo, codigo});
  }
}
