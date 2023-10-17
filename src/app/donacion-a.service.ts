import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { donacionAResponse, donacionAno, proyectoId, response, urldonacionAno } from './helpers/donacionAnoHelpers';
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
  verDonaciones(): Observable<response>{
    return this.clienteHttp.get<response>(this.url)
  }
}
