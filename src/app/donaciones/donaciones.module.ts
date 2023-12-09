import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ApadrinamientoComponent } from './apadrinamiento/apadrinamiento.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AporteSolidarioComponent } from './aporte-solidario/aporte-solidario.component';
import { AportedelTiempoComponent } from './aportedel-tiempo/aportedel-tiempo.component';
import { PracticascdcComponent } from './practicascdc/practicascdc.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  declarations: [
    FormularioComponent,
    ApadrinamientoComponent,
    TarjetasComponent,
    AporteSolidarioComponent,
    AportedelTiempoComponent,
    PracticascdcComponent,
    
    
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SpinnerModule
  ]
})
export class DonacionesModule { }
