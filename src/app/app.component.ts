import { Component, OnInit, OnDestroy, Renderer2, ElementRef} from '@angular/core';
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

  navLinksVisible = false;
  isMobile = window.innerWidth <= 767; // Verificar si la pantalla es móvil al inicio



  usuarioLogeado: boolean;
  private loginSuscripcion: Subscription;

  title = 'donationManagement';

  ngOnInit(): void {
    this.revisarLogin();
    console.log(this.usuarioLogeado);
    
     // Escuchar eventos de cambio de tamaño de la ventana
     window.addEventListener('resize', this.handleWindowResize.bind(this));

     

  }
  ngOnDestroy(): void {
    this.loginSuscripcion?.unsubscribe();
  }


  constructor(private authService: AutenticacionService, private router:Router, private loginService: LoginService, private renderer: Renderer2, private el: ElementRef){}


toggleNav() {
    this.navLinksVisible = !this.navLinksVisible;
  }
 
  // Función para manejar cambios en el tamaño de la ventana
  handleWindowResize() {
    this.isMobile = window.innerWidth <= 767;
    if (!this.isMobile) {
      // Si no es una pantalla móvil, asegúrate de mostrar la barra de navegación
      this.navLinksVisible = false;
    }
  }
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
