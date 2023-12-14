import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ColaboradorResponse } from 'src/app/helpers/colaboradoresHelpers';
import { AutenticacionService } from 'src/app/services/autenticacionService/autenticacion.service';
import { ColaboradoresService } from 'src/app/services/colaboradorService/colaboradores.service';
import { LoginService } from 'src/app/services/loginService/login.service';
@Component({
  selector: 'app-gestiondonaciones',
  templateUrl: './gestiondonaciones.component.html',
  styleUrls: ['./gestiondonaciones.component.css']
})
export class GestiondonacionesComponent implements OnInit, OnDestroy{

  showSolicitudesDonacion: boolean = false;
  showCrearProyectos: boolean = false;
  showCrearProgramas: boolean = false;
  showVerProgramas: boolean = false;
  showVerProyectos: boolean = false;
  showVerColaboradores: boolean = false;
  showVerBenefactores: boolean = false;

  idCol: string;
  colaborador: ColaboradorResponse;

  private colaboradorSuscripcion: Subscription;

  ngOnInit(): void {
    this.idCol = this.route.snapshot.params['uid'];
    this.obtenercolaborador();
  }

  ngOnDestroy(): void {
    this.colaboradorSuscripcion?.unsubscribe();
  }

  
  constructor(private route: ActivatedRoute, private router:Router, private colaboradorService: ColaboradoresService){}

  obtenercolaborador(){
    this.colaboradorSuscripcion = this.colaboradorService.obtenerColaborador(this.idCol).subscribe({
      next:(data)=>{
        console.log(data);
        this.colaborador = data.colaborador;
      },
      error:(error)=>console.log(error),
    })
  }


  

  
}
