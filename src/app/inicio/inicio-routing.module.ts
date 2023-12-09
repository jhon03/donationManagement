import { NgModule } from '@angular/core'; 

import { RouterModule, Routes } from '@angular/router'; 
import { AcercadecdcComponent } from './acercadecdc/acercadecdc.component';
import { NoticiascdcComponent } from './noticiascdc/noticiascdc.component';

const routes: Routes = [ 
{ 

path: '', 

component: AcercadecdcComponent, 

}, 

{
    path: 'noticiascdc',
    component: NoticiascdcComponent
}



]; 

 
 

@NgModule({ 

imports: [RouterModule.forChild(routes)], 

exports: [RouterModule] 

}) 

export class InicioRoutingModule { } 

 
 

 
 

 
 

 