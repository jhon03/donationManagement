import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { proyectoRequest, proyectoResponse } from 'src/app/helpers/proyectoHelpers';
import { ImageService } from 'src/app/image.service';
import { ProyectoService } from 'src/app/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-proyectos',
  templateUrl: './ver-proyectos.component.html',
  styleUrls: ['./ver-proyectos.component.css']
})
export class VerProyectosComponent implements OnInit, OnDestroy{

  proyectos: proyectoResponse[];

  private deleteSuscripcion: Subscription;
  private proyectosSuscripcion: Subscription;
  private imagenSuscripcion: Subscription;

  ngOnDestroy(): void {
    this.deleteSuscripcion?.unsubscribe();
    this.proyectosSuscripcion?.unsubscribe();
    this.imagenSuscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  constructor(private ruta: ActivatedRoute, private imagenService: ImageService, private proyectoService: ProyectoService){}

  private obtenerProyectos(){
    this.proyectosSuscripcion = this.proyectoService.proyectoLista().subscribe(
      {
        next:({proyecto})=> {
          this.proyectos = proyecto;
          console.log(proyecto);
        },
        error:(error)=>console.log(error),
      }
      
    )
  }

  public eliminarProyecto(idProyecto: string){
    this.imagenSuscripcion = this.imagenService.eliminarImagenes('proyectos', idProyecto).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.deleteImgs(idProyecto);
        },
        error:(error)=>console.log(error),
      }
    )
  }

  private deleteImgs(idProyecto: string){
    this.deleteSuscripcion = this.proyectoService.eliminarProyecto(idProyecto).subscribe(
      {
        next:(data)=>{
          console.log(data);
          Swal.fire('proyecto eliminado con exito', 'success')
          this.obtenerProyectos();
        },
        error:(error)=>console.log(error),
      }
    )
  }




}
