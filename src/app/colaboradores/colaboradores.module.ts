import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';
import { GestiondonacionesComponent } from './gestiondonaciones/gestiondonaciones.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
  
    ListcolaboradoresComponent,
       GestiondonacionesComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatToolbarModule

  ]
})
export class ColaboradoresModule { }
