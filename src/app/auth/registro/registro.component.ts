import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColaboradoresService } from 'src/app/colaboradores.service';
import { ColaboradorRequest } from 'src/app/helpers/colaboradoresHelpers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {

  colaborador: ColaboradorRequest = new ColaboradorRequest();
  private suscripcionGetCol:Subscription;
  private suscripcionCrearCol:Subscription;

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  
  constructor(private colaboradorService: ColaboradoresService){

  }

  onSubmit(){
    this.crearColaborador();
  }


  crearColaborador(){
    this.suscripcionCrearCol = this.colaboradorService.crearColaborador(this.colaborador).subscribe(
      {
        next:(data)=>{
          console.log(data); 
          Swal.fire("colaboradore creado correctamente","succes");       
        },
        error:(error)=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'error en el proceso',
          text: 'Something went wrong!',
        })
        }
      },
    )
  }

  

}
