import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramasyproyectosRoutingModule } from './programasyproyectos-routing.module';
import { ProgramascdcComponent } from './programascdc/programascdc.component';
import { MaterialModule } from '../material/material.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ProyectoscdcComponent } from './proyectoscdc/proyectoscdc.component';

@NgModule({
  declarations: [
    ProgramascdcComponent,
    ProyectoscdcComponent
  ],
  imports: [
    CommonModule,
    ProgramasyproyectosRoutingModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class ProgramasyproyectosModule { }