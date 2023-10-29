import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { donacionAResponse, donacionAno, proyectoId, response, urlDonacionPrograma, urldonacionAno } from './helpers/donacionAnoHelpers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonacionAService {

  private url = urldonacionAno;

  constructor(private clienteHttp: HttpClient) { }

  crearDonacionPrograma(programa: string,donacionA:donacionAno): Observable<donacionAResponse>{
    return this.clienteHttp.post<donacionAResponse>(`${urlDonacionPrograma}/${programa}/crear`,donacionA)
  }

  crearDonacionProyecto(proyecto: string,donacionA:donacionAno): Observable<donacionAResponse>{
    return this.clienteHttp.post<donacionAResponse>(`${this.url}/${proyecto}/crear`,donacionA)
  }

  verDonacionesProgramas(): Observable<response>{
    return this.clienteHttp.get<response>(urlDonacionPrograma);
  }

  verDonacionesProyectos(): Observable<response>{
    return this.clienteHttp.get<response>(urldonacionAno);
  }
}
