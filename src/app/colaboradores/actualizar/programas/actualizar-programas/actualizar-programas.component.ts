import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { programaRequest } from 'src/app/helpers/programaHelpers';
import { ImageService } from 'src/app/image.service';
import { ProgramasService } from 'src/app/programas.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-actualizar-programas',
  templateUrl: './actualizar-programas.component.html',
  styleUrls: ['./actualizar-programas.component.css']
})
export class ActualizarProgramasComponent {

  programa: programaRequest = new programaRequest();
  selectedImages: any[] = [];
  archivo: any[] = [];

  listaOpciones = [       //aqui se agregan las opciones de donacion o aporte
    { text: 'Apadrinar', isSelected: false },
    { text: 'Aporte Solidario', isSelected: false },
    { text: 'Aporte en Tiempo', isSelected: false },
  ]

  showDropdown = false;

  private idPrograma: string;
  private programaSuscripcion: Subscription;
  private programaIdSuscripcion: Subscription;
  private imagenSuscripcion: Subscription;
  private deleteImgSuscripcion: Subscription; 

  constructor(
    private pogramaService: ProgramasService,
    private router: Router,
    private ruta: ActivatedRoute,
    private imagenService: ImageService,
  ) {

  }

  ngOnDestroy(): void {
    this.programaSuscripcion?.unsubscribe();
    this.programaIdSuscripcion?.unsubscribe();
    this.imagenSuscripcion?.unsubscribe();
    this.deleteImgSuscripcion?.unsubscribe();
  }
  ngOnInit(): void {
    this.idPrograma = this.ruta.snapshot.params['id'];
    this.obtenerPrograma();
  }

  obtenerPrograma() {
    this.programaIdSuscripcion = this.pogramaService.programaId(this.idPrograma).subscribe(
      {
        next: ({ programa }) => {
          this.programa.nombre = programa.nombre;
          this.programa.eslogan = programa.eslogan;
          this.programa.descripcion = programa.descripcion;
          this.programa.usuCreador = programa.usuCreador;
          this.programa.usuModificador = programa.usuModificador;
          this.programa.opcionesColaboracion = programa.opcionesColaboracion;
          this.selectedImages = programa.imagenes;

          for (let opcion of this.listaOpciones) {
            opcion.isSelected = programa.opcionesColaboracion.includes(opcion.text);
          }
        },
        error: (error) => console.log(error)
      }
    )
  }

  onSubmit() {
    this.programa.imagenes = [];
    this.programa.opcionesColaboracion = this.listaOpciones
    .filter((opcion) => opcion.isSelected)
    .map((opcion) => opcion.text);

    this.programaSuscripcion = this.pogramaService.actualizarPrograma(this.idPrograma, this.programa).subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.uploadImg();
        },
        error: (error) => console.log(error),
      }
    )
  }

  private uploadImg() {
    const totalImgs = this.archivo.length;
    console.log(totalImgs);
    if(totalImgs <= 0){
      this.router.navigateByUrl('/VerProgramas');
      return;
    }
    let imgUp = 0;

    this.archivo.forEach(({ file }) => {
      const formData = new FormData();
      formData.append('archivo', file);

      this.imagenService.uploadFile(formData,'programas', this.idPrograma).subscribe(
        {
          next: (img) => {
            imgUp++;
            if (imgUp === totalImgs) {
              Swal.fire("Programa actualizado", "correctamente");
              this.router.navigateByUrl('/VerProgramas');
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
    console.log(this.selectedImages);
    this.selectedImages.splice(index, 1);

    if (imagen.url.includes('https://res.cloudinary.com/')) {
      console.log('imagen a eliminar\n', imagen.url);
      this.deleteImgSuscripcion = this.imagenService.eliminarImg('programas', imagen._id).subscribe(
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

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

}
