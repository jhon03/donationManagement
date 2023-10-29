import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BenefactorService } from 'src/app/benefactor.service';
import { DonacionAService } from 'src/app/donacion-a.service';
import { BenefactorRequest } from 'src/app/helpers/benefactorHelpers';
import { donacionAno } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';
import { opcionesColaboracion } from '../helpers/opciones.helpers';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/programas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnDestroy {

  donacionA: donacionAno = new donacionAno();
  listaOpciones: opcionesColaboracion = new opcionesColaboracion();     //creamois la intancia de las opciones para escoger la que necesitamos


  private idSuscripcion: Subscription;
  private nombreSuscripcion: Subscription;
  private donacionProgramaSuscripcion: Subscription;
  private donacionProyectoSuscripcion: Subscription;

  programa: programaRequest = new programaRequest();
  id: string;
  relacion: string;
  opcion: string;

  ngOnDestroy(): void {
    this.idSuscripcion?.unsubscribe();
    this.nombreSuscripcion?.unsubscribe();
    this.donacionProyectoSuscripcion?.unsubscribe();
    this.donacionProgramaSuscripcion?.unsubscribe();
    
  }
  ngOnInit(): void {
    this.obtenerId();
    this.obtenerNombre();
  }


constructor(private benefactorService: BenefactorService, 
            private donacionAService: DonacionAService,
            private activatedRoute: ActivatedRoute,
            private donacionService: DonacionAService,
  ){

}


onSubmit(){
  if(this.relacion === 'proyecto'){
    this.crearDonacionProyecto();
  } 
  if(this.relacion === 'programa') {
    this.crearDonacionPrograma();
  }
  
}


obtenerId(){
  this.idSuscripcion = this.activatedRoute.params.subscribe(
    {
      next: ({id, opcion}) =>{
        this.id = id;
        this.opcion = opcion;
        console.log(opcion);
      },
      error: (error) =>{
        console.log(error);
      }
    }
  )
}

obtenerNombre(){
  this.nombreSuscripcion = this.activatedRoute.url.subscribe(
    {
      next: (segmentos) =>{
        const segmentosArray = segmentos.map(parte => parte.path);
        if(segmentosArray.length > 1){
          const nombre = segmentosArray[0];
          this.relacion = nombre;
          console.log(nombre);
        }
      },
      error: (error) => console.log(error)
    }
  )
}

crearDonacionProyecto(){

  this.donacionProyectoSuscripcion = this.donacionService.crearDonacionProyecto(this.id ,this.donacionA).subscribe(
    {
      next: (data) =>{
        console.log('donacion creada');
        console.log(data);
        Swal.fire('donacion creada correctamente', 'succes')
      },
      error: (error)=>{
        const errores = error.error.errors;
        let errorMessage = 'Something went wrong!';


        if (errores ) {
          console.log(errores);
          errorMessage = 'Errors:';
          errores.forEach((err: any) => {
            errorMessage += `\n- ${err.msg}`;
          });
        }

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
          footer: ''
        });
      }
    }
  )

}

crearDonacionPrograma(){

  this.donacionProgramaSuscripcion = this.donacionService.crearDonacionPrograma(this.id ,this.donacionA).subscribe(
    {
      next: (data) =>{
        console.log('donacion creada');
        console.log(data);
        Swal.fire('donacion creada correctamente', 'succes')
      },
      error: (error)=>{
        const errores = error.error.errors;
        let errorMessage = 'Something went wrong!';


        if (errores ) {
          console.log(errores);
          errorMessage = 'Errors:';
          errores.forEach((err: any) => {
            errorMessage += `\n- ${err.msg}`;
          });
        }

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
          footer: ''
        });
      }
    }
  )

}
}
