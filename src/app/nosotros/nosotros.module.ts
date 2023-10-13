import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { PruebaloginComponent } from './pruebalogin/pruebalogin.component';


@NgModule({
  declarations: [
    PruebaloginComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
