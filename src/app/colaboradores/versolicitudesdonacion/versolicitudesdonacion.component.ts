import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DonacionAService } from 'src/app/donacion-a.service';
import { donacionAResponse } from 'src/app/helpers/donacionAnoHelpers';

@Component({
  selector: 'app-versolicitudesdonacion',
  templateUrl: './versolicitudesdonacion.component.html',
  styleUrls: ['./versolicitudesdonacion.component.css']
})
export class VersolicitudesdonacionComponent implements OnInit, OnDestroy {

  donaciones: donacionAResponse[];
  private donacionesSuscripcion: Subscription;


  constructor(private donacionService: DonacionAService){}


  ngOnDestroy(): void {
    this.donacionesSuscripcion?.unsubscribe();

  }

  ngOnInit(): void {
    this.obtenerDonacionesProgramas();
  }

  obtenerDonacionesProgramas(){
      this.donacionesSuscripcion = this.donacionService.verDonacionesProgramas().subscribe({ next: (data)=>{
        this.donaciones = data.donacion;
        this.obtenerDonacionesProyectos();
      },
      error: (error)=>{
        console.log(error);
      }
      });
  }

  obtenerDonacionesProyectos(){
    this.donacionService.verDonacionesProyectos().subscribe(
      {
        next: (data) =>{
          this.donaciones = this.donaciones.concat(data.donacion);
          console.log('total donaciones');
          console.log(this.donaciones);
          this.ordenarLista(this.donaciones)
        },
        error: (error) =>{
          console.log(error);
        }
      }
    )
  }

  private ordenarLista(donaciones: donacionAResponse[]){
    console.log(donaciones);
    const orderedDonaciones = donaciones.sort( (a,b)=> {
      let fechaa = new Date(a.fechaCreacion);
      let fechab = new Date(b.fechaCreacion);
      return fechab.getTime() - fechaa.getTime() 
    });
    console.log(orderedDonaciones);
    this.donaciones = orderedDonaciones;
  }

}
