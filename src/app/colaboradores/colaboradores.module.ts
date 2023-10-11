import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';


@NgModule({
  declarations: [
  
    ListcolaboradoresComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule
  ]
})
export class ColaboradoresModule { }
