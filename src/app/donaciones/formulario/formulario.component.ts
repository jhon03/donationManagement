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
  nombrePro: string;


  ngOnDestroy(): void {
    this.idSuscripcion?.unsubscribe();
    this.nombreSuscripcion?.unsubscribe();
    this.donacionProyectoSuscripcion?.unsubscribe();
    this.donacionProgramaSuscripcion?.unsubscribe();
    
  }
  ngOnInit(): void {
    this.opcion = this.activatedRoute.snapshot.params['opcion'];
    this.relacion = this.activatedRoute.snapshot.params['nombre'];
    this.id = this.activatedRoute.snapshot.params['id'];
    this.nombrePro = this.activatedRoute.snapshot.params['npro'];
    console.log(`${this.id}  ${this.opcion}  ${this.relacion}  ${this.nombrePro}`)
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





crearDonacionProyecto(){

  this.donacionProyectoSuscripcion = this.donacionService.crearDonacionProyecto(this.id ,this.donacionA).subscribe(
    {
      next: (data) =>{
        Swal.fire('Nuestro equipo revisará tu solicitud detenidamente y te contactará lo antes posible para brindarte más detalles sobre el proceso de donación' , 'Att: CDC San Francisco de Asís');
        
        console.log(data);
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
       
        Swal.fire('Nuestro equipo revisará tu solicitud detenidamente y te contactará lo antes posible para brindarte más detalles sobre el proceso de donación', 'Att: CDC San Francisco de Asís');
        console.log(data);
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
