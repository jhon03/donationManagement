import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadecdcComponent } from '../inicio/acercadecdc/acercadecdc.component';
import { ProgramascdcComponent } from './programascdc/programascdc.component';
import { ProyectoscdcComponent } from './proyectoscdc/proyectoscdc.component';
import { FormularioComponent } from '../donaciones/formulario/formulario.component';
import { AporteSolidarioComponent } from '../donaciones/aporte-solidario/aporte-solidario.component';
import { ApadrinamientoComponent } from '../donaciones/apadrinamiento/apadrinamiento.component';
import { AportedelTiempoComponent } from '../donaciones/aportedel-tiempo/aportedel-tiempo.component';

const routes: Routes = [

{
  path: '',
  component: AcercadecdcComponent
},

{
  path: 'programascdc',
  component: ProgramascdcComponent
},

{
  path: 'aporte-solidario',
  component: AporteSolidarioComponent
},

{ path: 'programa/id/formulario/:opcion', 
component: FormularioComponent
},

{
  path: 'apadrinamiento',
  component: ApadrinamientoComponent
},

{
  path: 'aportedeltiempo',
  component: AportedelTiempoComponent
},
  
{
  path: 'proyecto/:id/formulario/:opcion',
  component: FormularioComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasyproyectosRoutingModule { }
