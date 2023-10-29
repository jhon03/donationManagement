import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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

 
  private proyectoSuscripcion: Subscription;
  proyectos: proyectoResponse[];

  programas: programaResponse[];

  constructor(private router: Router, private proyectoService: ProyectoService, private programaService: ProgramasService) { }
  
  ngOnDestroy(): void {
    this.proyectoSuscripcion?.unsubscribe();
  }

  ngOnInit(): void{

    this.proyectosLista();
  }

  proyectosLista(){
    this.proyectoSuscripcion = this.proyectoService.proyectoLista().subscribe(
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



  redirigir(opcionesColaboracion: string): void{
    if(opcionesColaboracion === 'Aporte Solidario'){
      this.router.navigate(['/aportesolidario']);
   

    }else if (opcionesColaboracion === 'Aporte en Tiempo'){
      this.router.navigate(['/aportedeltiempo'])
     }


}

}