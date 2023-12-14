import { Component, OnInit, OnDestroy } from '@angular/core';
import { Credenciales } from 'src/app/helpers/loginHelpers';
import {BehaviorSubject, Subscription} from 'rxjs';
import { LoginService } from 'src/app/services/loginService/login.service';
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

  hide = true;

  

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
          console.log(data.body.usuario);    
          Swal.fire(`Sesión iniciada`, "Bienvenido")
          this.router.navigateByUrl(`gestiondonaciones/${data.body.usuario.uid}`)
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
