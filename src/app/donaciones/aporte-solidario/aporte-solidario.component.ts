import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonacionAService } from 'src/app/donacion-a.service';
import { donacionAResponse, donacionAno } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aporte-solidario',
  templateUrl: './aporte-solidario.component.html',
  styleUrls: ['./aporte-solidario.component.css']
})
export class AporteSolidarioComponent implements OnInit, OnDestroy {

  private idSuscripcion: Subscription;
  private nombreSuscripcion: Subscription;
  private donacionProgramaSuscripcion: Subscription;
  private donacionProyectoSuscripcion: Subscription;

  donacion: donacionAno = new donacionAno();
  id: string;
  relacion: string;

  listAportes: any = [
    {value:"utiles-escolares", key:"utiles-escolares"},
    {value:"matricula-academica", key:"matricula-academica"},
    {value:"desayunos-saludables", key:"desayunos-saludables"}, 
    {value: "Refrigerios", key: "Refrigerios"},
    {value: "Papeleria", key: "Papeleria"},
    {value: "Voluntariado", key: "Voluntariado"},
    {value: "Pasantía comunitaria", key: "Pasantía comunitaria"},
    {value: "Facilitador/Tallerista", key: "Facilitador/Tallerista"}
];

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
  


  constructor(private activatedRoute: ActivatedRoute, private donacionService: DonacionAService){

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
        next: ({id}) =>{
          this.id = id;
          console.log(id);
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

    this.donacionProyectoSuscripcion = this.donacionService.crearDonacionProyecto(this.id ,this.donacion).subscribe(
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

    this.donacionProgramaSuscripcion = this.donacionService.crearDonacionPrograma(this.id ,this.donacion).subscribe(
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
