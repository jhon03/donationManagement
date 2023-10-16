import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { donacionAResponse, donacionAno, proyectoId, urldonacionAno } from './helpers/donacionAnoHelpers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonacionAService {

  private proyecto = proyectoId;
  private url = urldonacionAno;

  constructor(private clienteHttp: HttpClient) { }

  crearDonacion(donacionA:donacionAno): Observable<donacionAResponse>{
    return this.clienteHttp.post<donacionAResponse>(`${this.url}/${this.proyecto}/crear`,donacionA)
  }
  verDonaciones(): Observable<donacionAResponse[]>{
    return this.clienteHttp.get<donacionAResponse[]>(this.url)
  }
}
