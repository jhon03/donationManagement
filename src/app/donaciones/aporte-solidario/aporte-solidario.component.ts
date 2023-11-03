import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonacionAService } from 'src/app/donacion-a.service';
import { donacionAResponse, donacionAno } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aporte-solidario',
  templateUrl: './aporte-solidario.component.html',
  styleUrls: ['./aporte-solidario.component.css'],
  
})
export class AporteSolidarioComponent implements OnInit, OnDestroy {


  casoExito2 = "Nuestra Escuela para Cuidadores ha demostrado ser un recurso invaluable en nuestra comunidad al proporcionar orientación y acompañamiento psicológico a un amplio espectro de edades, desde niños y niñas hasta adultos y personas mayores. Nuestro enfoque no solo se centra en el apoyo emocional, sino que también desarrolla estrategias sólidas para la prevención y promoción de la salud mental de las personas y la comunidad en su conjunto.";

  casoExito3 = "Al centrar nuestras acciones en la creación de espacios de escucha y reconocimiento para las personas mayores, hemos logrado un impacto positivo en sus vidas, fortaleciendo sus habilidades socioemocionales y sus vínculos afectivos con sus familias y la comunidad en general Cada mes, entre 20 y 30 personas mayores participan en nuestro programa, donde reciben apoyo pedagógico y psicosocial a través de una amplia gama de talleres y actividades.";


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
    this.mostrarCasoExito1();
    this.mostrarCasoExito2();
    this.mostrarCasoExito3();
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

  mostrarCasoExito1(){

    const casoExito1 = "En nuestra propuesta de aprendizaje colaborativo, hemos logrado un impacto significativo en la vida de niños, niñas y adolescentes de edades comprendidas entre 7 y 15 años";

    
    const intervenciones = "A través de intervenciones lúdicas, artísticas, actividades de lectura, escritura, expresión oral y el uso de la tecnología, hemos creado un espacio de integración y convivencia que promueve la cultura y el crecimiento personal.";

      const mensajeCompleto = casoExito1 + " " + intervenciones;

    Swal.fire(mensajeCompleto);
  }

  mostrarCasoExito2(){
    Swal.fire(this.casoExito2);
  }

  mostrarCasoExito3(){
    Swal.fire(this.casoExito3);
  }


  }



