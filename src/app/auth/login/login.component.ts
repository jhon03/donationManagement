import { Component, OnInit, OnDestroy } from '@angular/core';
import { Credenciales } from 'src/app/helpers/loginHelpers';
import {Subscription} from 'rxjs';
import { LoginService } from 'src/app/login.service';

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

  constructor(private loginService:LoginService){

  }

  onSubmit(){
    this.login();
  }

  login(){
    this.suscripcion = this.loginService.login(this.credenciales).subscribe(
      {
        next:(data)=>{
          console.log(data);
        },
        error:(error)=>{
          console.log(error);
        }      
      }
    )
  }



}