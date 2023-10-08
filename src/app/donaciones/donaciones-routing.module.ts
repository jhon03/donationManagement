import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';

const routes: Routes = [

{
  path: 'formulariodonaciones',
  component: FormularioComponent
},

{
  path: 'apadrinamiento',
  component: ApadrinamientoComponent
}


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
