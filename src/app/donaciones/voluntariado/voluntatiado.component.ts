import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { BenefactorService } from 'src/app/benefactor.service';
import { DonacionAService } from 'src/app/donacion-a.service';
import { BenefactorRequest } from 'src/app/helpers/benefactorHelpers';
import { donacionAno } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voluntatiado',
  templateUrl: './voluntatiado.component.html',
  styleUrls: ['./voluntatiado.component.css']
})
export class VoluntatiadoComponent implements OnInit, OnDestroy{

  benefactor: BenefactorRequest = new BenefactorRequest();
  donacionA: donacionAno = new donacionAno();
  private suscripcionGetBen: Subscription;
  private suscripcionCrearBen: Subscription;

  ngOnInit(): void {

    
  }
  ngOnDestroy(): void {
    this.suscripcionCrearBen?.unsubscribe();
  }
  constructor(private benefactorService: BenefactorService, private donacionAservice: DonacionAService){

  }
  onSubmit(){
    this.crearBenefactor();
  }
  crearBenefactor(){
    this.suscripcionCrearBen = this.donacionAservice.crearDonacion(this.donacionA).subscribe(
      {
        next: (data) =>{
          console.log(data);
          Swal.fire("Su solicitud ha sido generada con éxito, gracias por aportar a nuestra labor", "Te estaremos contactando a los datos de contacto suministrados")
        },
        error: (error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Ocurrio un error al procesar la solicitud',
            text: 'puede comunicarse al 488 2222 ext 597'
          })
        }
      }
    )
  }

}
