import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/Modelos/proyecto';
import { proyectoResponse } from 'src/app/helpers/proyectoHelpers';
import { ProyectoService } from 'src/app/proyecto.service';
@Component({
  selector: 'app-proyectoscdc',
  templateUrl: './proyectoscdc.component.html',
  styleUrls: ['./proyectoscdc.component.css']
})
export class ProyectoscdcComponent  implements OnInit, OnDestroy{


  proyectos: Proyecto[] = [];

  proyectosA: proyectoResponse[];
  private proyectoSuscripcion: Subscription;


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


  loadProyectos(){
    this.proyectoService.getProyectos().subscribe(proyectos =>{
      this.proyectos = proyectos;
    })
  }

  redirigir(opcion: string): void{
    if(opcion === 'biblioteca'){
      this.router.navigate(['/biblioteca']);
   
     }else if (opcion === 'JardinInfantil'){
      this.router.navigate(['/JardinInfantil'])
     }


}

}