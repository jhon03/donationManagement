import { Component, OnInit, OnDestroy, isStandalone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { BenefactorService } from 'src/app/benefactor.service';
import { DonacionAService } from 'src/app/donacion-a.service';
import { BenefactorRequest } from 'src/app/helpers/benefactorHelpers';
import { donacionAno } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';
import { opcionesColaboracion } from '../helpers/opciones.helpers';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/programas.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
isStandalone: true;
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
  private confirmarSuscripcion: Subscription;

  loading = false;
  progress = 0;

  programa: programaRequest = new programaRequest();
  id: string;
  relacion: string;
  opcion: string;
  nombrePro: string;

  mostrarModal: boolean = false;
  correoBenefactor: string;
  codigoConfirmacion: string;
//para corregir el error
  formulario: FormGroup
  //para corregir el error
  ngOnDestroy(): void {
    this.idSuscripcion?.unsubscribe();
    this.nombreSuscripcion?.unsubscribe();
    this.donacionProyectoSuscripcion?.unsubscribe();
    this.donacionProgramaSuscripcion?.unsubscribe();
    this.confirmarSuscripcion?.unsubscribe();
    
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
            private router: Router
  ){
  
}


onSubmit(){
   
  this.loading = true;
  this.progress = 0;

  const intervalo = setInterval(() => {

    this.progress += 10;

    if (this.progress >= 100){
      clearInterval(intervalo);
      this.loading = false;
      this.mostrarModal = true;
    }
  }, 1000);


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
        if(data.accion === 'confirmar'){
          this.correoBenefactor = this.donacionA.correo;
          this.mostrarModal = true;
          return;
        } else if( data.accion === 'bienvenida'){
          Swal.fire({
            title: 'Gracias por hacer parte del cambio positivo en nuestra comunidad',
            text:'Revisaremos tu solicitud detenidamente para contactarte lo antes posible y brindarte más detalles sobre el proceso de donaciones; revisa nuestro mensaje de bienvenida en tu bandeja de correo eletrónico\n\n. Att:Equipo CDC San Francisco de Asís ',
  

          });
          this.router.navigateByUrl('/programascdc');
        }
        return;
      },
      error: (error)=>{
        console.log(error.error.error);
        const errores = error.error.error;


        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errores,
          footer: ''
        });
        //this.router.navigateByUrl('/programascdc');
      }
    }
  )

}

crearDonacionPrograma(){

  this.donacionProgramaSuscripcion = this.donacionService.crearDonacionPrograma(this.id ,this.donacionA).subscribe(
    {
      next: (data) =>{
        if(data.accion === 'confirmar'){
          this.correoBenefactor = this.donacionA.correo;
          this.mostrarModal = true;
          return;
        } else if( data.accion === 'bienvenida'){
          Swal.fire({
            title: 'Gracias por hacer parte del cambio positivo en nuestra comunidad',
            text:'Revisaremos tu solicitud detenidamente para contactarte lo antes posible y brindarte más detalles sobre el proceso de donaciones; revisa nuestro mensaje de bienvenida en tu bandeja de correo eletrónico\n\n. Att:Equipo CDC San Francisco de Asís ',
          });
          this.router.navigateByUrl('/programascdc');
        }
        return;
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
        this.router.navigateByUrl('/programascdc');
      }
    }
  )

  }

public confirmarDonacion(){
  console.log(`correo: ${this.correoBenefactor}\ncodigo: ${this.codigoConfirmacion}`);
  this.confirmarSuscripcion = this.donacionService.confirmarCorreoDona(this.correoBenefactor, this.codigoConfirmacion).subscribe(
    {
      next:({msg})=>{
        console.log(msg);
        Swal.fire({
          title: 'Gracias por hacer parte del cambio positivo en nuestra comunidad',
          text:'Revisaremos tu solicitud detenidamente para contactarte lo antes posible y brindarte más detalles sobre el proceso de donaciones; revisa nuestro mensaje de bienvenida en tu bandeja de correo eletrónico\n\n. Att:Equipo CDC San Francisco de Asís ',
        });
        this.router.navigateByUrl('/programascdc');
      },
      error:(error)=>console.log(error),
    }
  )
}

}
