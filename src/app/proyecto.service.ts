
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from 'src/Modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //donacion = new Donacion();
  private proyectos: Proyecto[] = [
    {
        idProyecto: 1,
        nombreProyecto: 'Escuela para cuidadores',
        aporte: 2000,
        costoTotal: 1000000,
        descripcion:'Pautas de crianza y derechos: costruyendo el vínculo afectivo con nuestros niños y niñas',
        fechaCreacion: '2023/07/03',
        usuarioCreador: 'JHON',
        estado: 'A',
        categoria: 'consultorioPsicologico',
        photo: '/assets/jardin.jpg',
        avatar: '/assets/LogoEPC.png',
        tipo: 'proyecto'
    },
    
    {
      idProyecto: 2,
      nombreProyecto: 'Huertas Urbanas',
      aporte: 2000,
      costoTotal: 1000000,
      descripcion:'Generar espacios para el desarrollo sostenible a través de la siembra de diferentes plantas para consumo cotidiano desde los diferentes saberes de tradición de nuestros mayores',
    
      fechaCreacion: '2023/07/03',
      usuarioCreador: 'JHON',
      estado: 'A',
      categoria: 'biblioteca',
      photo: '/assets/Huertas.png',
      avatar: '/assets/logousb.png',
      tipo: 'proyecto'
      
    }
  
  ];
  getProyectos(): Observable<Proyecto[]>{
    return of(this.proyectos);
  };


  
/*  crearDonación (aporte: number){

    //objeto donacion, crear ese objeto
     return of(this.donacion);
}*/
/*
     getDonacion(aporte: any) : Observable<Donacion>{
      return of(this.donacion);
    }*/


    constructor() { }
  }


