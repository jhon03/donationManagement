import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';
import { GestiondonacionesComponent } from './gestiondonaciones/gestiondonaciones.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
  
    ListcolaboradoresComponent,
       GestiondonacionesComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    MatTableModule
  ]
})
export class ColaboradoresModule { }
