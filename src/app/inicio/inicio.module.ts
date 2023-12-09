import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercadecdcComponent } from './acercadecdc/acercadecdc.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { InicioRoutingModule } from './inicio-routing.module';
import { NoticiascdcComponent } from './noticiascdc/noticiascdc.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AcercadecdcComponent,
    NoticiascdcComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    InicioRoutingModule,
    MatPaginatorModule
  ]
})
export class InicioModule { }
