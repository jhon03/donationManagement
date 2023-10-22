import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { proyectoRequest } from 'src/app/helpers/proyectoHelpers';
import { ProyectoService } from 'src/app/proyecto.service';
import Swal from 'sweetalert2';

import { ProgramasService } from 'src/app/programas.service';
import { HttpClient } from '@angular/common/http';
import { responseProgram } from 'src/app/helpers/programaHelpers';
import { Proyecto } from 'src/Modelos/proyecto';
@Component({
  selector: 'app-formcreacionproyectos',
  templateUrl: './formcreacionproyectos.component.html',
  styleUrls: ['./formcreacionproyectos.component.css']
})
export class FormcreacionproyectosComponent implements OnInit{
  
  proyecto: proyectoRequest = new proyectoRequest();
  private programaSuscripcion: Subscription;

  listaOpciones = [       //aqui se agregan las opciones de donacion o aporte
  { text: 'Apadrinar', isSelected: false },
  { text: 'Aporte Solidario', isSelected: false },
  { text: 'Aporte en Tiempo', isSelected: false },
  ];


  showDropdown = false;


  private programa: string = '653565d1759d2a5f9feef477';   //aqui se obtine el id del programa pero este se pasa en la url, se define por defecto por ahora  

  

  programas = [];

  ngOnInit(): void {

   this.programaService.programaLista().subscribe((data: any )=> {
    this.programas = data;
   }) 

  }
 

  constructor(private proyectoService: ProyectoService, private programaService:ProgramasService, private http: HttpClient){

  }

  onSubmit(){
    this.proyecto.opcionesColaboracion = this.listaOpciones
    .filter((opcion) => opcion.isSelected)
    .map((opcion) => opcion.text);

    this.crearProyecto();



  }
 
  crearProyecto(){
   console.log(this.programa);

    

    this.programaSuscripcion = this.proyectoService.crearProyectos(this.proyecto, this.programa).subscribe(
      {
        next: (data)=>{
          console.log(data);
          Swal.fire("proyecto Creado con éxito", "Excelente")
        },
        error: (error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'error en el proceso',
            text: 'Something went wrong!'
        })
      } 
    }
    )
  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }





}
