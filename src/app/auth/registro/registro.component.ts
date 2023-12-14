import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColaboradoresService } from 'src/app/services/colaboradorService/colaboradores.service';
import { ColaboradorRequest } from 'src/app/helpers/colaboradoresHelpers';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

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
  
  constructor(private colaboradorService: ColaboradoresService, private fb: FormBuilder){

  }

  formUser = this.fb.group({
    'tIdent': ['', [Validators.required]],
    'nIdent': ['', [Validators.required, Validators.pattern('^[0-9]*$') ]],
    'nombre': ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
    'username': ['',[Validators.required, Validators.minLength(6)] ],
    'contrasena': ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')] ],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required, Validators.pattern('^\\d{9}$') ]],
    'cargo': ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$') ]],
    'rol': ['', [Validators.required]],
  })

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
