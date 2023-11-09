import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ImageService } from 'src/app/image.service';
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



  
  ngOnInit(): void {
  }
  ngOnDestroy(): void {

  }

  constructor(private programaService: ProgramasService, private imagenService: ImageService ){

  }

  onSubmit(){
    this.programa.opcionesColaboracion = this.listaOpciones
    .filter((opcion) => opcion.isSelected)
    .map((opcion) => opcion.text);

    this.crearPrograma();

  }

  crearPrograma(){
    this.programa.imagenes = [];
    this.programaSuscripcion = this.programaService.crearPrograma(this.programa).subscribe(
      {
        next:(datos)=>{
          console.log(datos);
          Swal.fire("programa Creado con éxito", "Ahora estara visible publicamente desde la pestaña programas/proyectos");
          this.uploadImg(datos);
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




  private uploadImg(programa: programaResponse){
    const totalImgs = this.selectedImages.length;
    let imgUp = 0;
    let imgdown: number = 0;
    const uuid = programa.uid;

    

    this.archivo.forEach( (imagen) => {
      const formData = new FormData();
      formData.append('archivo',imagen);

        
      this.imageSuscription = this.imagenService.uploadFile(formData,'programas', uuid).subscribe(
        {
          next:(data)=>{   
            imgUp++;
            if(imgUp === totalImgs){
              console.log(data);
              //Swal.fire("Producto Creado Correctamente","success");
              //this.router.navigateByUrl('/admin');
            }
          },
          error: (error:any) => {
            imgdown++;
            console.log(error);
            console.log(`Error al subir la imagen ${imagen}`)
            if(imgdown === totalImgs){
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
