import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadecdcComponent } from '../inicio/acercadecdc/acercadecdc.component';
import { ProgramascdcComponent } from './programascdc/programascdc.component';
import { ProyectoscdcComponent } from './proyectoscdc/proyectoscdc.component';

const routes: Routes = [

{
  path: '',
  component: AcercadecdcComponent
},

{
  path: 'programascdc',
  component: ProgramascdcComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasyproyectosRoutingModule { }
