import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercadecdcComponent } from './acercadecdc/acercadecdc.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { InicioRoutingModule } from './inicio-routing.module';


@NgModule({
  declarations: [
    AcercadecdcComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
