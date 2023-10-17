import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';
import { VoluntatiadoComponent } from './voluntariado/voluntatiado.component';

const routes: Routes = [

{
  path: 'formulariodonaciones',
  component: FormularioComponent
},

{
  path: 'apadrinamiento',
  component: ApadrinamientoComponent
},
{
  path: 'voluntariado',
  component: VoluntatiadoComponent
}


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
