import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { programaRequest } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/programas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-creacionprogramas',
  templateUrl: './creacionprogramas.component.html',
  styleUrls: ['./creacionprogramas.component.css']
})
export class CreacionprogramasComponent implements OnInit, OnDestroy {
  
  programa: programaRequest = new programaRequest();
  private programaSuscripcion: Subscription;

  listaOpciones = [       //aqui se agregan las opciones de donacion o aporte
  { text: 'Apadrinar', isSelected: false },
  { text: 'Aporte Solidario', isSelected: false },
  { text: 'Aporte en Tiempo', isSelected: false },
 
  ];
  
  showDropdown = false;



  
  ngOnInit(): void {
  }
  ngOnDestroy(): void {

  }

  constructor(private programaService: ProgramasService){

  }

  onSubmit(){
    this.programa.opcionesColaboracion = this.listaOpciones
    .filter((opcion) => opcion.isSelected)
    .map((opcion) => opcion.text);

    this.crearPrograma();

  }

  crearPrograma(){
    this.programaSuscripcion = this.programaService.crearPrograma(this.programa).subscribe(
      {
        next:(datos)=>{
          console.log(datos);
          Swal.fire("programa Creado con éxito", "succes")
        },
        error:(error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Ocurrio un error',
            text: 'No se ha creado el programa'
          })
        }
      }
    )
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  


}
