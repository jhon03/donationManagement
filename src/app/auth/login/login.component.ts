import { Component, OnInit, OnDestroy } from '@angular/core';
import { Credenciales } from 'src/app/helpers/loginHelpers';
import {BehaviorSubject, Subscription} from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  

  credenciales: Credenciales = new Credenciales();
  private suscripcion: Subscription;

  

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();

  }

  constructor(private loginService:LoginService, private router: Router){

  }

  onSubmit(){
    this.login();
  }

  login(){

    this.suscripcion = this.loginService.login(this.credenciales).subscribe(
      {
        next:(data)=>{
          console.log(data);
     
Swal.fire(`Sesión iniciada`, "Bienvenido")
         this.router.navigate(['/gestiondonaciones'])
        },
        error:(error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'usuario no válido'
          })
        }      
      }
    )
  }



}
