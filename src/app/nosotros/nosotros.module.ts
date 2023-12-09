import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { PruebaloginComponent } from './pruebalogin/pruebalogin.component';
import { InfoComponent } from './info/info.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EquipoComponent } from './equipo/equipo.component';


@NgModule({
  declarations: [
    PruebaloginComponent,
    InfoComponent,
    EquipoComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class NosotrosModule { }
