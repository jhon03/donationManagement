import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { donacionAResponse, donacionAno, resDonacion, response, urlDonacionPrograma, urlDonacionProyecto, urlDonaciones} from '../../helpers/donacionAnoHelpers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/security/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class DonacionAService {


  constructor(private clienteHttp: HttpClient, private tokenService: TokenService) { }

  

  public crearDonacionProyecto(proyecto: string ,donacion: donacionAno): Observable<resDonacion>{
    return this.clienteHttp.post<resDonacion>(`${urlDonacionProyecto}/proyecto/${proyecto}/crear`, donacion);
  }

  public crearDonacionPrograma(programa: string ,donacion: donacionAno): Observable<resDonacion>{
    return this.clienteHttp.post<resDonacion>(`${urlDonacionPrograma}/programa/${programa}/crear`, donacion);
  }

  //confirma el correo para la donacion mediante un codigo
  public confirmarCorreoDona(correo: string, codigo:string): Observable<resDonacion>{
    return this.clienteHttp.post<resDonacion>(`${urlDonaciones}/verificar/correo/donacion`, {correo, codigo});
  }

  verDonacionesProgramas(): Observable<response>{
    return this.clienteHttp.get<response>(urlDonacionPrograma);
  }

  verDonacionesProyectos(): Observable<response>{
    return this.clienteHttp.get<response>(urlDonacionProyecto);
  }

  //lista de donaciones desde otro endpoint  -- integracion con correo
  //endpoints de donaciones( juanta las donaciones de programas y proyectos)
  public listAllDonaciones(limite: number, pagina: number): Observable<response>{
    return this.clienteHttp.get<response>(`${urlDonaciones}`, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        

    }));
  }


  public buscarIdDonacionList(idDonacion: string): Observable<donacionAResponse>{
    return this.clienteHttp.get<donacionAResponse>(`${urlDonaciones}/${idDonacion}`);
  }

  //informacion para el benefactor  en metodo post (url, options(headers))
  public infoDonacionBenefactor(token: string): Observable<resDonacion>{
    const headers = new HttpHeaders({
      'Dona-token': token,
    });

    return this.clienteHttp.get<resDonacion>(`${urlDonaciones}/InfoDonacion/benefactor`, {headers});
  }

  //confirmar donacion benefactor en metodo post (url, body, options(headers))
  public confirmarDonacionBenefactor(token: string, condicion: string): Observable<resDonacion>{
    console.log(token);
    const headers = new HttpHeaders({
      'Dona-token': token,
    });
    return this.clienteHttp.post<resDonacion>(`${urlDonaciones}/formEntrega/${condicion}`, null ,{headers});
  }


  //endpoints del colaborador


  public confirmarDonacion(id: string, detalles: string): Observable<resDonacion>{
    console.log(detalles);
    return this.clienteHttp.post<resDonacion>(`${urlDonaciones}/confirmar/${id}`, {detalles});
  }

  public rechazarDonacion(id: string, mensaje: string): Observable<resDonacion>{
    return this.clienteHttp.put<resDonacion>(`${urlDonaciones}/rechazar/${id}`, {mensaje});
  }

  public correoRecibido(id: string): Observable<resDonacion>{
    return this.clienteHttp.get<resDonacion>(`${urlDonaciones}/correo/recibido/${id}`);
  }
  



}
