import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/autenticacion.service';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-gestiondonaciones',
  templateUrl: './gestiondonaciones.component.html',
  styleUrls: ['./gestiondonaciones.component.css']
})
export class GestiondonacionesComponent implements OnInit, OnDestroy{


  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  
  constructor(private authService: AutenticacionService, private router:Router, private loginService: LoginService){}


  

  
}
