import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { proyectoResponse, proyectoRequest } from 'src/app/helpers/proyectoHelpers';
import { ProyectoService } from 'src/app/proyecto.service';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/programas.service';
@Component({
  selector: 'app-proyectoscdc',
  templateUrl: './proyectoscdc.component.html',
  styleUrls: ['./proyectoscdc.component.css']
})
export class ProyectoscdcComponent  implements OnInit, OnDestroy{
  pagina: number;
  limite: number = 2;    //variable ajustable a cantidad necesaria, ajustar la de programas y proyectos en mismo numero
 
  private proyectoSuscripcion: Subscription;
  private paginaSuscripcion: Subscription;
  proyectos: proyectoResponse[];

  //programas: programaResponse[];
  

  constructor(private router: Router, private proyectoService: ProyectoService, private programaService: ProgramasService) { }
  
  ngOnDestroy(): void {
    this.proyectoSuscripcion?.unsubscribe();
    this.paginaSuscripcion?.unsubscribe();
  }

  ngOnInit(): void{

    this.proyectosLista();
    this.obtenerPagina();
  }

  proyectosLista(){
    this.proyectoSuscripcion = this.proyectoService.proyectoListaVista(this.pagina, this.limite).subscribe(
      {
        next:(datos)=>{
          console.log(datos);
          this.proyectos = datos.proyecto
        },
        error:(error)=>{
          console.log(error);
        }      
      }
    )
  }

  private obtenerPagina(){
    this.paginaSuscripcion = this.programaService.getPaginaActual().subscribe(
      {
        next:(data)=>{
          this.pagina=data;
          this.proyectosLista();;
          
        },
        error:(error)=>console.log(error),
      }
    )
  }



  redirigir(opcionesColaboracion: string): void{
    if(opcionesColaboracion === 'Aporte Solidario'){
      this.router.navigate(['/aportesolidario']);
   

    }else if (opcionesColaboracion === 'Aporte en Tiempo'){
      this.router.navigate(['/aportedeltiempo'])
     }
  }

  paginasButton(){
    this.pagina = this.pagina + 1;
    this.proyectosLista();
  }

  proyectoCaducado(proyecto: proyectoResponse){
    console.log(`fecha fin proyecto: ${proyecto.fechaFinalizacion}`);
    let fechaAct = moment();
    let fechaFin = moment(proyecto.fechaFinalizacion, 'YYYY-MM-DDTHH:mm:ss.SSSZ' );
    console.log(`fecha actual: ${fechaAct}\nfecha fin proyecto: ${fechaFin}`);
    let estaCerrado = fechaFin.isBefore(fechaAct);
    console.log(estaCerrado);
    return estaCerrado;
  }

}