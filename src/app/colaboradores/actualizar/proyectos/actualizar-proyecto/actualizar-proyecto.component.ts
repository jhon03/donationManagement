import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { programaRequest } from 'src/app/helpers/programaHelpers';
import { proyectoRequest } from 'src/app/helpers/proyectoHelpers';
import { ImageService } from 'src/app/services/imagenService/image.service';
import { ProyectoService } from 'src/app/services/proyectoService/proyecto.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styleUrls: ['./actualizar-proyecto.component.css']
})
export class ActualizarProyectoComponent implements OnInit, OnDestroy{

  proyectoR: proyectoRequest = new proyectoRequest();
  selectedImages: any[] = [];
  archivo: any[] = [];
  idProyecto: string;

  listaOpciones = [       //aqui se agregan las opciones de donacion o aporte
  { text: 'Apadrinar', isSelected: false },
  { text: 'Aporte Solidario', isSelected: false },
  { text: 'Aporte en Tiempo', isSelected: false },
  ];

  private proyectoSuscripcion: Subscription;
  private proyectoIdSuscripcion: Subscription;
  private imagenSuscripcion: Subscription;
  private deleteImgSuscripcion: Subscription; 

  ngOnDestroy(): void {
    this.proyectoSuscripcion?.unsubscribe();
    this.imagenSuscripcion?.unsubscribe();
    this.deleteImgSuscripcion?.unsubscribe();
    this.proyectoIdSuscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.idProyecto = this.ruta.snapshot.params['id'];
    this.obtenerProyecto(this.idProyecto);
  }

  constructor(
    private ruta: ActivatedRoute,
    private imagenService:ImageService,
    private proyectoService: ProyectoService,
    private router: Router,
  ){

  }

  private obtenerProyecto(idProyecto: string){
    this.proyectoIdSuscripcion = this.proyectoService.obtenerProyectoId(idProyecto).subscribe(
      {
        next:({proyecto})=> {
          console.log(proyecto);
          this.proyectoR.colCreador = proyecto.colCreador;
          this.proyectoR.colModificador = proyecto.colModificador;
          this.proyectoR.costo = proyecto.costo;
          this.proyectoR.descripcion = proyecto.descripcion;
          this.proyectoR.fechaFinalizacion = new Date(proyecto.fechaFinalizacion).toISOString().split('T')[0];
          this.proyectoR.fechaInicio = new Date(proyecto.fechaInicio).toISOString().split('T')[0];
          this.proyectoR.imagenes = proyecto.imagenes;
          this.proyectoR.nombre = proyecto.nombre;
          this.proyectoR.tipoProyecto = proyecto.tipoProyecto;
          this.selectedImages = proyecto.imagenes;

          for (let opcion of this.listaOpciones) {
            opcion.isSelected = proyecto.opcionesDonacion.includes(opcion.text);
          }
          console.log(this.proyectoR);
        }

      }
      
    )
  }

  onSubmit(){
    console.log(this.proyectoR);
    this.proyectoR.imagenes = [];
    this.proyectoR.opcionesDonacion = this.listaOpciones
    .filter((opcion) => opcion.isSelected)
    .map((opcion) => opcion.text);
    this.proyectoSuscripcion = this.proyectoService.actualizarProyecto(this.idProyecto, this.proyectoR).subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.uploadImg();
        },
        error:(error)=> console.log(error)
      }
    )

  }

  private uploadImg() {
    const totalImgs = this.archivo.length;
    console.log(totalImgs);
    if(totalImgs <= 0){
      this.router.navigateByUrl('/VerProyectos');
      return;
    }
    let imgUp = 0;

    this.archivo.forEach(({ file }) => {
      const formData = new FormData();
      formData.append('archivo', file);

      this.imagenSuscripcion = this.imagenService.uploadFile( formData ,'proyectos', this.idProyecto).subscribe(
        {
          next: (img) => {
            imgUp++;
            if (imgUp === totalImgs) {
              Swal.fire("Proyecto actualizado", "correctamente");
              this.router.navigateByUrl('/VerProyectos');
            }
            
          },
          error: (error: any) => {
            console.log(error);
            if (imgUp === totalImgs) {
              Swal.fire('Error al subir imágenes', 'error');
            }
          }
        }
      )
    })
  }


  upload(event: any) {
    const files = event.target.files;
    console.log(this.selectedImages);
    const uuid = uuidv4();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.archivo.push({ id: uuid, file });
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push({ _id: uuid, url: e.target.result });
      };

      reader.readAsDataURL(file);
      console.log(this.archivo);
    }
  }

  removeImage(index: number, imagen: any) {
    this.selectedImages.splice(index, 1);

    if (imagen.url.includes('https://res.cloudinary.com/')) {
      console.log('imagen a eliminar\n', imagen.url);
      this.deleteImgSuscripcion = this.imagenService.eliminarImg('proyectos', imagen._id).subscribe(
        {
          next: (data) => console.log(data),
          error: (error) => console.log(error),
        }
      )
      return

    }
    this.archivo = this.archivo.filter((archivo) => archivo.id !== imagen._id);
    console.log('Imagen eliminada\n', this.archivo);


  }



  showDropdown = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

}
