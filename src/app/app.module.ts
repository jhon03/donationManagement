import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { InicioModule } from './inicio/inicio.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProgramasyproyectosModule } from './programasyproyectos/programasyproyectos.module';
import { DonacionesModule } from './donaciones/donaciones.module';
import { AuthModule } from './auth/auth.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule,
    InicioModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    ProgramasyproyectosModule,
    DonacionesModule,
    AuthModule,
    ColaboradoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
