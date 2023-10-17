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
  private donacionesSuscripcion: Subscription

  constructor(private donacionService: DonacionAService){}


  ngOnDestroy(): void {
    this.donacionesSuscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones(){
 this.donacionesSuscripcion = this.donacionService.verDonaciones().subscribe({ next: (data)=>{
  this.donaciones = data.donacion;
  console.log(this.donaciones);
},
error: (error)=>{
  console.log(error);
}
});
}
}
