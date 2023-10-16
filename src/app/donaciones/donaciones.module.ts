import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    FormularioComponent,
    ApadrinamientoComponent,
    TarjetasComponent
    
    
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class DonacionesModule { }
