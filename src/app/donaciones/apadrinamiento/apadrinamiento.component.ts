import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BenefactorService } from 'src/app/services/benefactorService/benefactor.service';
import { DonacionAService } from 'src/app/services/donacionService/donacion-a.service';
import { BenefactorRequest } from 'src/app/helpers/benefactorHelpers';
import { donacionAno } from 'src/app/helpers/donacionAnoHelpers';
import Swal from 'sweetalert2';
import { opcionesColaboracion } from '../helpers/opciones.helpers';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/services/programaService/programas.service';

@Component({
  selector: 'app-apadrinamiento',
  templateUrl: './apadrinamiento.component.html',
  styleUrls: ['./apadrinamiento.component.css']
})
export class ApadrinamientoComponent implements OnInit, OnDestroy{

  donacionA: donacionAno = new donacionAno();
  listaOpciones: opcionesColaboracion = new opcionesColaboracion();     //creamois la intancia de las opciones para escoger la que necesitamos


  private idSuscripcion: Subscription;
  private nombreSuscripcion: Subscription;
  private donacionProgramaSuscripcion: Subscription;
  private donacionProyectoSuscripcion: Subscription;

  programa: programaRequest = new programaRequest();
  id: string;
  relacion: string;
  opcion: string;


  ngOnDestroy(): void {
    this.idSuscripcion?.unsubscribe();
    this.nombreSuscripcion?.unsubscribe();
    this.donacionProyectoSuscripcion?.unsubscribe();
    this.donacionProgramaSuscripcion?.unsubscribe();
    
  }
  ngOnInit(): void {
    this.obtenerId();
    this.obtenerNombre();
  }
  
  constructor(private donacionAService: DonacionAService, private activatedRoute: ActivatedRoute, private donacionService: DonacionAService){


  }

  
obtenerId(){
  this.idSuscripcion = this.activatedRoute.params.subscribe(
    {
      next: ({id, opcion}) =>{
        this.id = id;
        this.opcion = opcion;
        console.log(opcion);
      },
      error: (error) =>{
        console.log(error);
      }
    }
  )
}

obtenerNombre(){
  this.nombreSuscripcion = this.activatedRoute.url.subscribe(
    {
      next: (segmentos) =>{
        const segmentosArray = segmentos.map(parte => parte.path);
        if(segmentosArray.length > 1){
          const nombre = segmentosArray[0];
          this.relacion = nombre;
          console.log(nombre);
        }
      },
      error: (error) => console.log(error)
    }
  )
}

}


