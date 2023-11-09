
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from 'src/Modelos/proyecto';
import { proyectoIdRes, proyectoRequest, proyectoResponse, responseProyect, urlProyectos } from './helpers/proyectoHelpers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private httpClient: HttpClient){

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
    return this.httpClient.get<responseProyect>(urlProyectos);
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



  
/*  crearDonación (aporte: number){

    //objeto donacion, crear ese objeto
     return of(this.donacion);
}*/
/*
     getDonacion(aporte: any) : Observable<Donacion>{
      return of(this.donacion);
    }*/


  }


