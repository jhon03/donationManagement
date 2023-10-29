import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaloginComponent } from './pruebalogin/pruebalogin.component';
import { InfoComponent } from './info/info.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [


  {
    path: '',
    component: PruebaloginComponent
  },
  
  {
    path: 'logincolaborador',
    component: PruebaloginComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'equipo',
    component: EquipoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
