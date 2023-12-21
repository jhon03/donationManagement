import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColaboradoresService } from 'src/app/services/colaboradorService/colaboradores.service';
import { ColaboradorRequest } from 'src/app/helpers/colaboradoresHelpers';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  
  constructor(private colaboradorService: ColaboradoresService, private fb: FormBuilder, private router: Router){

  }


  formUser = this.fb.group({
    'tIdent': ['', [Validators.required]],
    'nIdent': ['', [Validators.required, Validators.pattern('^[0-9]*$') ]],
    'nombre': ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
    'username': ['',[Validators.required, Validators.minLength(5)] ],
    'contrasena': ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&+-/#]).{8,}$'), Validators.minLength(8) ] ],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required, Validators.pattern('^\\d{9}$') ]],
    'cargo': ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$') ]],
    'rol': ['', [Validators.required]],
  })

  get nombre(){return this.formUser.get('nombre') as FormControl};
  get correoCol(){return this.formUser.get('correo') as FormControl};
  get tIdent(){return this.formUser.get('tIdent') as FormControl};
  get nIdent(){return this.formUser.get('nIdent') as FormControl};
  get celular(){return this.formUser.get('celular') as FormControl};
  get rol(){return this.formUser.get('rol') as FormControl};
  get username(){return this.formUser.get('username') as FormControl};
  get cargo(){return this.formUser.get('cargo') as FormControl};
  get contrasena(){return this.formUser.get('contrasena') as FormControl};

  onSubmit(){
    const formValues = this.formUser.value;
    this.colaborador.nombre = formValues.nombre;
    this.colaborador.correo = formValues.correo;
    this.colaborador.tipoIdentificacion = formValues.tIdent;
    this.colaborador.numeroIdentificacion = formValues.nIdent;
    this.colaborador.celular = '3' + formValues.celular;
    this.colaborador.cargo = formValues.cargo;
    this.colaborador.contrasena= formValues.contrasena;
    this.colaborador.rol = formValues.rol;
    this.colaborador.username = formValues.username;

    this.crearColaborador();
  }

  confirmarCorreoCol(){
    this.confirmarSuscripcion = this.colaboradorService.confirmarCorreoCol(this.correo, this.codigo).subscribe({
      next: ({msg})=> {
        console.log(msg);
        Swal.fire('Correo confirmado correctamente');
        this.router.navigateByUrl('login');
      },
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
