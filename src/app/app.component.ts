import { Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  usuarioLogeado: boolean;
  private loginSuscripcion: Subscription;

  title = 'donationManagement';

  ngOnInit(): void {
    this.revisarLogin();
    console.log(this.usuarioLogeado);
    
}

  ngOnDestroy(): void {
    this.loginSuscripcion?.unsubscribe();
  }


  constructor(private authService: AutenticacionService, private router:Router, private loginService: LoginService, private renderer: Renderer2){}

  revisarLogin(){
    this.loginSuscripcion = this.loginService.usuarioLogeado.subscribe(
      {

        next: (userLogeado)=>{
          this.usuarioLogeado = userLogeado;
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
  logout(){
    this.loginService.loggout();
    //redirigir al colaborador a la página del login
  }

  redirigir(opcion: string): void{
    if(opcion === 'crear-programas'){
      this.router.navigate([
        '/creacionprogramas'
      ]);
     } else if (opcion === 'crear-colaboradores'){
        this.router.navigate(['Registro'])
      }

      }
    }
