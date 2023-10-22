import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';
import { AporteSolidarioComponent } from './aporte-solidario/aporte-solidario.component';
import { AportedelTiempoComponent } from './aportedel-tiempo/aportedel-tiempo.component';

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
  path: 'aportesolidario',
  component: AporteSolidarioComponent
},
{
  path: 'aportedeltiempo',
  component: AportedelTiempoComponent
}





];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
