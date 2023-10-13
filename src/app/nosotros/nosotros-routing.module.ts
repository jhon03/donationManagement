import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaloginComponent } from './pruebalogin/pruebalogin.component';

const routes: Routes = [


  {
    path: '',
    component: PruebaloginComponent
  },
  
  {
    path: 'logincolaborador',
    component: PruebaloginComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
