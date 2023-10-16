import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { programaRequest, programaResponse, urlProgramas } from './helpers/programaHelpers';
import { Observable } from 'rxjs';
import { ColaboradorResponse } from './helpers/colaboradoresHelpers';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private httpClient: HttpClient) { }

  public crearPrograma(programa: programaRequest): Observable<programaResponse>{
    return this.httpClient.post<programaResponse>(`${urlProgramas}/crear`, programa);
  }
}
