import { NgModule } from '@angular/core'; 

import { RouterModule, Routes } from '@angular/router'; 
import { AcercadecdcComponent } from './acercadecdc/acercadecdc.component';

const routes: Routes = [ 
{ 

path: '', 

component: AcercadecdcComponent, 

}, 



]; 

 
 

@NgModule({ 

imports: [RouterModule.forChild(routes)], 

exports: [RouterModule] 

}) 

export class InicioRoutingModule { } 

 
 

 
 

 
 

 