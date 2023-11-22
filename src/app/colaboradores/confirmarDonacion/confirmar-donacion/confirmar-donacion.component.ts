import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import { DonacionAService } from 'src/app/donacion-a.service';
import { donacionAResponse } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmar-donacion',
  templateUrl: './confirmar-donacion.component.html',
  styleUrls: ['./confirmar-donacion.component.css']
})
export class ConfirmarDonacionComponent implements OnInit, OnDestroy{
  private donacionSubscription : Subscription;
  private responseDonacion: Subscription;
  token: string ;
  idDonacion: string;
  donacion: donacionAResponse;
  mostrarOpciones: boolean = true;
  opcion: string;

  ngOnDestroy(): void {
    this.donacionSubscription?.unsubscribe();
    this.responseDonacion?.unsubscribe();
  }

  ngOnInit(): void {
    this.obtenerParametros();
  }

  constructor(private ruta: ActivatedRoute, private donacionService: DonacionAService){
  }

  private obtenerParametros(){
    this.idDonacion = this.ruta.snapshot.params['id'];
    this.token = this.ruta.snapshot.params['token'];
    this.donacionSubscription = this.donacionService.infoDonacionBenefactor(this.token).subscribe({
      next:({donacion})=>{
        this.donacion = donacion;
      },
      error:(error)=>console.log(error),
    })
  }

  public enviarRespuesta(condicion: string){
    this.opcion = condicion;
    this.mostrarOpciones = false;
    console.log(this.mostrarOpciones);
    this.responseDonacion = this.donacionService.confirmarDonacionBenefactor(this.token, condicion).subscribe(
      {
        next:(data)=>{
          console.log(data);
          Swal.fire('donacion realizada correctmnete', 'sucess');
        },
        error:(error)=>console.log(error),
      }
    )
  } 


}
