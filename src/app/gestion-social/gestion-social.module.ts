import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSocialRoutingModule } from './gestion-social-routing.module';
import { InfogestionsocialComponent } from './infogestionsocial/infogestionsocial.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import {MatCardModule} from '@angular/material/card';
import { PsicopedagogicoComponent } from './psicopedagogico/psicopedagogico.component';
import { EPCComponent } from './epc/epc.component';
import { BancoAlimentosComponent } from './banco-alimentos/banco-alimentos.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
  
    InfogestionsocialComponent,
       BibliotecaComponent,
       PsicopedagogicoComponent,
       EPCComponent,
       BancoAlimentosComponent
  ],
  imports: [
    CommonModule,
    GestionSocialRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class GestionSocialModule { }
