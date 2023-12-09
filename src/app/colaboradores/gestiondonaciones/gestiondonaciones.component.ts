import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacionService/autenticacion.service';
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

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  
  constructor(private authService: AutenticacionService, private router:Router, private loginService: LoginService){}


  

  
}
