import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DonacionAService } from 'src/app/donacion-a.service';
import { donacionAResponse } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-versolicitudesdonacion',
  templateUrl: './versolicitudesdonacion.component.html',
  styleUrls: ['./versolicitudesdonacion.component.css']
})
export class VersolicitudesdonacionComponent implements OnInit, OnDestroy {

  private donacionesSuscripcion: Subscription;
  private abrirSuscripcion: Subscription;
  private confirmarSuscripcion: Subscription;
  private rechazarSuscripcion: Subscription;

  donaciones: donacionAResponse[];
  pagina: number = 1;   //dartos necesarios para la paginacion
  limite: number = 5;
  mensaje: string = 'mensaje de rechazar donacion';


  constructor(private donacionService: DonacionAService){}


  ngOnDestroy(): void {
    this.donacionesSuscripcion?.unsubscribe();
    this.abrirSuscripcion?.unsubscribe();
    this.confirmarSuscripcion?.unsubscribe();
    this.rechazarSuscripcion?.unsubscribe();

  }

  ngOnInit(): void {
    this.donacionLista();
  }


  //nuevo endpoint list donaciones
  private donacionLista(){
    this.donacionesSuscripcion = this.donacionService.listAllDonaciones(this.limite, this.pagina).subscribe(
      {
        next: (datos)=>{
          console.log(datos.donaciones);
          this.donaciones = datos.donaciones;
        },
        error: (error)=>console.log(error),     
      }
    )

  }

  public abrirDonacion(id: string){
    this.abrirSuscripcion = this.donacionService.abrirDonacion(id).subscribe({
      next:(data)=>{
        console.log(data);
        this.donacionLista();
      },
      error:(error)=>console.log(error),
    })
  }

  public confirmarDonacion(id: string){
    this.confirmarSuscripcion = this.donacionService.confirmarDonacion(id).subscribe({
      next:(data)=>{
        console.log(data);
        this.donacionLista();
        Swal.fire('Correo enviado al benefactor', 'sucess');
      },
      error:(error)=>console.log(error),
    })
  }

  public rechazarDonacion(id: string){
    this.rechazarSuscripcion = this.donacionService.rechazarDonacion(id, this.mensaje).subscribe({
      next:(data)=>{
        console.log(data);
        this.donacionLista();
        Swal.fire('donacion rechaza correctamnete', 'sucess');
      },
      error:(error)=>console.log(error),
    })
  }

  
  paginasbutton(){
    console.log(this.pagina);
    this.pagina = this.pagina + 1;
    this.donacionLista();
  }

}
