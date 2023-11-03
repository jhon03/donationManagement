import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { programaRequest, programaResponse,responseP, responseProgram, urlProgramas } from './helpers/programaHelpers';
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

  public programaLista():Observable<responseProgram>{
    return this.httpClient.get<responseProgram>(urlProgramas);
  }

  public programaId(uuid: string ):Observable<responseP>{
    return this.httpClient.get<responseP>(`${urlProgramas}/${uuid}`)
  }


  public actualizarPrograma(idprograma: string, programa: programaRequest): Observable<programaResponse>{
    return this.httpClient.put<programaResponse>(`${urlProgramas}/actualizar/${idprograma}`, programa);
  }

  public deletePrograma(idPrograma: string): Observable<responseP>{
    return this.httpClient.delete<responseP>(`${urlProgramas}/eliminar/${idPrograma}`);
  }
}
