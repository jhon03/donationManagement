import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';
import { GestiondonacionesComponent } from './gestiondonaciones/gestiondonaciones.component';

const routes: Routes = [

  {
  path: '',
    component: ListcolaboradoresComponent
  },
  
  {
    path: 'listcolaboradores',
    component: ListcolaboradoresComponent
  },

  {
    path: 'gestiondonaciones',
    component: GestiondonacionesComponent
  }
  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
