import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { proyectoResponse, proyectoRequest } from 'src/app/helpers/proyectoHelpers';
import { ProyectoService } from 'src/app/proyecto.service';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
@Component({
  selector: 'app-proyectoscdc',
  templateUrl: './proyectoscdc.component.html',
  styleUrls: ['./proyectoscdc.component.css']
})
export class ProyectoscdcComponent  implements OnInit, OnDestroy{

 
  private proyectoSuscripcion: Subscription;
  proyectosA: proyectoResponse[];

  programas: programaResponse[];
  constructor(private router: Router, private proyectoService: ProyectoService) { }
  
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
          console.log(datos.proyecto);
          this.proyectosA = datos.proyecto
        },
        error:(error)=>{
          console.log(error);
        }      
      }
    )
  }



  redirigir(opcionesColaboracion: string): void{
    if(opcionesColaboracion === 'Apadrinar'){
      this.router.navigate(['/apadrinamiento']);
   
     }else if (opcionesColaboracion === 'Aporte Solidario'){
      this.router.navigate(['/aportesolidario'])
     
    }else if (opcionesColaboracion === 'Aporte en Tiempo'){
      this.router.navigate(['/aportedeltiempo'])
     }


}

}