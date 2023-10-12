import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { IngresoColaboradoresComponent } from './ingreso-colaboradores/ingreso-colaboradores.component';

const routes: Routes = [


  {
    path: '',
    component: RegistroComponent
  },
  
  {
    path: 'Registro',
    component: RegistroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ingresoColaboradores',
    component: IngresoColaboradoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
