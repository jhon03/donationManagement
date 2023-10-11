import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';

const routes: Routes = [

  {
  path: '',
    component: ListcolaboradoresComponent
  },
  
  {
    path: 'listcolaboradores',
    component: ListcolaboradoresComponent
  }
  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
