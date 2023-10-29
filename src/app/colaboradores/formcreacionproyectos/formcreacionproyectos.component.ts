import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { proyectoRequest, proyectoResponse } from 'src/app/helpers/proyectoHelpers';
import { ProyectoService } from 'src/app/proyecto.service';
import Swal from 'sweetalert2';

import { ProgramasService } from 'src/app/programas.service';
import { HttpClient } from '@angular/common/http';
import { programaResponse, responseProgram } from 'src/app/helpers/programaHelpers';
import { Proyecto } from 'src/Modelos/proyecto';
import { ImageService } from 'src/app/image.service';
@Component({
  selector: 'app-formcreacionproyectos',
  templateUrl: './formcreacionproyectos.component.html',
  styleUrls: ['./formcreacionproyectos.component.css']
})
export class FormcreacionproyectosComponent implements OnInit, OnDestroy{
  
  programas: programaResponse[];
  programa: programaResponse;
  proyecto: proyectoRequest = new proyectoRequest();
  idPrograma: string;;   //aqui se obtine el id del programa pero este se pasa en la url, se define por defecto por ahora  
  private proyectoSuscripcion: Subscription;
  private programaIdSuscripcion: Subscription;
  private programaSuscripcion: Subscription;


  private imageSuscription: Subscription;

  selectedImages: any[] = [];
  archivo: any[] = [];
  id:number = 0;



  listaOpciones = [       //aqui se agregan las opciones de donacion o aporte
  { text: 'Apadrinar', isSelected: false },
  { text: 'Aporte Solidario', isSelected: false },
  { text: 'Aporte en Tiempo', isSelected: false },
  ];


  showDropdown = false;

  ngOnDestroy(): void {
    this.programaIdSuscripcion?.unsubscribe();
    this.programaSuscripcion?.unsubscribe();
    this.proyectoSuscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.obtenerProgramas();
  }
 

  constructor(
    private proyectoService: ProyectoService,
    private programaService:ProgramasService,
    private imagenService: ImageService,
    ){

  }


  onSubmit(){
    console.log(this.listaOpciones);
    this.proyecto.opcionesDonacion = this.listaOpciones
    .filter((opcion) => opcion.isSelected)
    .map((opcion) => opcion.text);

    this.crearProyecto();



  }

  obtenerProgramas(){
    this.programaSuscripcion = this.programaService.programaLista().subscribe(
      {
        next: (datos)=>{
          console.log(datos);
          this.programas = datos.programas;
        },
        error: (error)=>{
          console.log(error);
        }
      }
     ) 
  }
 
  crearProyecto(){

   this.programaIdSuscripcion = this.programaService.programaId(this.idPrograma).subscribe(
    {
      next: (datos) =>{
        this.programa = datos.programa;
        this.proyecto.colCreador = datos.programa.usuCreador;
        this.proyecto.colModificador = datos.programa.usuModificador;
        console.log(this.proyecto);

        this.proyectoSuscripcion = this.proyectoService.crearProyectos(this.proyecto, this.idPrograma).subscribe(
          {
            next: (data)=>{
              console.log('respuesta proyecto');
              console.log(data);
              this.uploadImg(data);
             
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

      },
      error: (error)=>{
        console.log(error);
      }
    }
   )


  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }







  private uploadImg(proyecto: proyectoResponse){
    const totalImgs = this.selectedImages.length;
    let imgUp = 0;
    const uuid = proyecto.uid;

    

    this.archivo.forEach( (imagen) => {
      const formData = new FormData();
      formData.append('archivo',imagen);

        
      this.imageSuscription = this.imagenService.uploadFile(formData,'proyectos', uuid).subscribe(
        {
          next:(img)=>{   
            imgUp++;
            if(imgUp === totalImgs){
              Swal.fire("proyecto Creado con éxito", "Excelente")
              //this.router.navigateByUrl('/admin');
            }
          },
          error: (error:any) => {
            console.log(error);
          if(imgUp === totalImgs){
              Swal.fire('Error al subir imágenes', 'error');
            //this.router.navigateByUrl('/agregar-producto');
            }
          }
        }
      )
    })


  }


  upload(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.archivo.push(file);

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push({ name: file.name, url: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }

  removeAllImages() {
    this.selectedImages = [];
  }





}
