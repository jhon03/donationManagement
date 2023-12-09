import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { programaRequest, programaResponse,responseP, responseProgram, urlProgramas } from '../../helpers/programaHelpers';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColaboradorResponse } from '../../helpers/colaboradoresHelpers';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  private pagina: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor(private httpClient: HttpClient) { }

  getPaginaActual(): Observable<number>{
    return this.pagina.asObservable();
  }

  incrementarPagina() {
    const paginaActual = this.pagina.value;
    if (paginaActual > 0) {
      this.pagina.next(paginaActual + 1);
    }
    console.log(this.pagina.value);
  }

  decrementarPagina() {
    const paginaActual = this.pagina.value;
    if (paginaActual > 1) {
      this.pagina.next(paginaActual - 1);
    }
  }

  public crearPrograma(programa: programaRequest): Observable<programaResponse>{
    return this.httpClient.post<programaResponse>(`${urlProgramas}/crear`, programa);
  }

  public programaLista():Observable<responseProgram>{
    return this.httpClient.get<responseProgram>(`${urlProgramas}`);
  }

  //ruta programas para usuarios
  public programaListaVista(page: number, limite: number):Observable<responseProgram>{
    return this.httpClient.get<responseProgram>(`${urlProgramas}/vista/?page=${page}&limite=${limite}`);
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

  public ocultarPrograma(uid: string): Observable<responseP>{
    return this.httpClient.delete<responseP>(`${urlProgramas}/ocultar/${uid}`);
  }

  public habilitarPrograma(uid: string): Observable<responseP>{
    return this.httpClient.get<responseP>(`${urlProgramas}/habilitar/${uid}`);
  }
}
