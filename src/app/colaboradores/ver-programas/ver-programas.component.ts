import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { descImg, programaResponse } from 'src/app/helpers/programaHelpers';
import { ImageService } from 'src/app/image.service';
import { ProgramasService } from 'src/app/programas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ver-programas',
  templateUrl: './ver-programas.component.html',
  styleUrls: ['./ver-programas.component.css']
})
export class VerProgramasComponent  implements OnInit, OnDestroy{

  programas: programaResponse[];
  private programasSuscripcion: Subscription;
  private imagenSuscripcion: Subscription;
  private deleteSuscripcion:Subscription;
  private habilitarSuscripcion: Subscription;
  private ocultarSuscripcion: Subscription;

  ngOnDestroy(): void {
    this.programasSuscripcion?.unsubscribe();
    this.imagenSuscripcion?.unsubscribe();
    this.deleteSuscripcion?.unsubscribe();
    this.habilitarSuscripcion?.unsubscribe();
    this.ocultarSuscripcion?.unsubscribe();
  }
  ngOnInit(): void {
    this.obtenerProgramas();
  }

  constructor( private programaService: ProgramasService, private imagenService: ImageService){

  }

  private obtenerProgramas(){
    this.programasSuscripcion = this.programaService.programaLista().subscribe(
      {
        next:({programas})=>{
          console.log(programas);
          this.programas = programas;
        },
        error:(error)=>console.log(error),
      }
    )
  }

  public habilitar(uid: string){
    this.habilitarSuscripcion = this.programaService.habilitarPrograma(uid).subscribe({
      next:(data)=>{
        console.log(data);
        this.obtenerProgramas();
      },
      error:(error)=>console.log(error),
    })
  }
  public ocultar(uid:string){
    this.ocultarSuscripcion = this.programaService.ocultarPrograma(uid).subscribe({
      next:(data)=>{
        console.log(data)
        this.obtenerProgramas();
      },
      error:(error)=>console.log(error),
    })
  }


  public eliminarPrograma(idPrograma: string, imagenes: descImg[]){
    console.log(imagenes);
    if(imagenes.length > 0){
      console.log(idPrograma);
      this.imagenSuscripcion = this.imagenService.eliminarImagenes('programas', idPrograma).subscribe(
        {
          next:(data)=>{
            console.log(`imagenes eliminadas correctamente\n${data}`);
            this.deleteImgs(idPrograma);
          },
          error:(error)=>console.log(error),
        }
      )
    } else {

      console.log("el programa no tiene imagenes");
      this.deleteImgs(idPrograma);
    }
    
  }

  private deleteImgs(idPrograma: string){
    this.deleteSuscripcion = this.programaService.deletePrograma(idPrograma).subscribe(
      {
        next:(data)=>{
          console.log(data);
          Swal.fire('programa eliminado con exito', 'success')
          this.obtenerProgramas();
        },
        error:(error)=>console.log(error),
      }
    )
  }



  
}
