
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Proyecto } from 'src/Modelos/proyecto';
import { proyectoIdRes, proyectoRequest, proyectoResponse, responseProyect, urlProyectos } from '../../helpers/proyectoHelpers';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/security/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService){

  }

  //donacion = new Donacion();
  private proyectos: Proyecto[] = [
 ];

  getProyectos(): Observable<Proyecto[]>{
    return of(this.proyectos);
  };


  public crearProyectos(proyecto: proyectoRequest, programa:any): Observable<proyectoResponse>{
    return this.httpClient.post<proyectoResponse>(`${urlProyectos}/${programa}/crear`,proyecto);
  }


  public proyectoLista():Observable<responseProyect>{
    return this.httpClient.get<responseProyect>(`${urlProyectos}`, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    }));
  }

  public proyectoListaVista(pagina: number, limite: number):Observable<responseProyect>{
    return this.httpClient.get<responseProyect>(`${urlProyectos}/vista/?page=${pagina}&limite=${limite}`);
  }

  public actualizarProyecto(id: string, proyecto: proyectoRequest):Observable<proyectoIdRes>{
    return this.httpClient.put<proyectoIdRes>(`${urlProyectos}/${id}`, proyecto );
  }

  public obtenerProyectoId(id: string): Observable<proyectoIdRes>{
    return this.httpClient.get<proyectoIdRes>(`${urlProyectos}/${id}`);
  }

  public eliminarProyecto(id: string): Observable<proyectoIdRes>{
    return this.httpClient.delete<proyectoIdRes>(`${urlProyectos}/${id}`);
  }

  public ocultarProyecto(uid: string): Observable<proyectoIdRes>{
    return this.httpClient.delete<proyectoIdRes>(`${urlProyectos}/ocultar/${uid}`);
  }

  public habilitarProyecto(uid: string): Observable<proyectoIdRes>{
    return this.httpClient.get<proyectoIdRes>(`${urlProyectos}/habilitar/${uid}`);
  }



  
/*  crearDonación (aporte: number){

    //objeto donacion, crear ese objeto
     return of(this.donacion);
}*/
/*
     getDonacion(aporte: any) : Observable<Donacion>{
      return of(this.donacion);
    }*/


}


