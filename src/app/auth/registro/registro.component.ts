import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColaboradoresService } from 'src/app/services/colaboradorService/colaboradores.service';
import { ColaboradorRequest } from 'src/app/helpers/colaboradoresHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {

  colaborador: ColaboradorRequest = new ColaboradorRequest();
  correo: string;
  codigo: string;
  modal: boolean = false;

  private confirmarSuscripcion :Subscription;
  private suscripcionCrearCol :Subscription;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.suscripcionCrearCol?.unsubscribe();
    this.confirmarSuscripcion?.unsubscribe();
  }
  
  constructor(private colaboradorService: ColaboradoresService){

  }

  onSubmit(){
    this.crearColaborador();
  }

  confirmarCorreoCol(){
    this.confirmarSuscripcion = this.colaboradorService.confirmarCorreoCol(this.correo, this.codigo).subscribe({
      next: ({msg})=> console.log(msg),
      error: (error)=>console.log(error)
    })
  }


  crearColaborador(){
    this.suscripcionCrearCol = this.colaboradorService.crearColaborador(this.colaborador).subscribe(
      {
        next:({msg, colaborador})=>{
          console.log(msg); 
          this.correo = colaborador.correo;
          this.modal = true;   
        },
        error:(error)=>{
          console.log(error);
          Swal.fire({ 
            icon: 'error',
            title: 'error en el proceso',
            text: error.error.errors[0].msg,
          })
          }
      },
    )
  }

  

}
