import { Component, OnInit} from '@angular/core';
import { DonacionAService } from 'src/app/donacion-a.service';
import { donacionAResponse } from 'src/app/helpers/donacionAnoHelpers';

@Component({
  selector: 'app-versolicitudesdonacion',
  templateUrl: './versolicitudesdonacion.component.html',
  styleUrls: ['./versolicitudesdonacion.component.css']
})
export class VersolicitudesdonacionComponent implements OnInit {

  donaciones: donacionAResponse[] = [];

  constructor(private donacionService: DonacionAService){}

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones(){
this.donacionService.verDonaciones().subscribe({ next: (data)=>{
  this.donaciones = data;
  console.log(this.donaciones);
},
error: (error)=>{
  console.log(error);
}
});
}
}
