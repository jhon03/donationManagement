import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DonacionAService } from 'src/app/services/donacionService/donacion-a.service';
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
  private confirmarRecibidoSuscripcion: Subscription;

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
    this.confirmarRecibidoSuscripcion?.unsubscribe();

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
  public confirmarDonacion(id: string, detalles: string){
    console.log(detalles);
    this.confirmarSuscripcion = this.donacionService.confirmarDonacion(id, detalles).subscribe({
      next:(data)=>{
        console.log(data);
        this.donacionLista();
        Swal.fire('Correo enviado al benefactor', 'sucess');
      },
      error:(error)=>Swal.fire(error.error.error),
    })
  }

  public rechazarDonacion(id: string, motivo: string){
    this.rechazarSuscripcion = this.donacionService.rechazarDonacion(id, motivo).subscribe({
      next:(data)=>{
        console.log(data);
        this.donacionLista();
        Swal.fire('donacion rechaza correctamnete', 'sucess');
      },
      error:(error)=>Swal.fire(error.error.error),
    })
  }

  public confirmarRecibido(id: string){
    this.confirmarRecibidoSuscripcion = this.donacionService.correoRecibido(id).subscribe({
      next:(data)=>{
        console.log(data);
        this.donacionLista();
        Swal.fire('Correo de confirmacion enviado', 'sucess');
      },
      error:(error)=>Swal.fire(error.error.error),
    })
  }

  
  paginasbutton(){
    console.log(this.pagina);
    this.pagina = this.pagina + 1;
    this.donacionLista();
  }

}
