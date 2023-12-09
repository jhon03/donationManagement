import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { InicioModule } from './inicio/inicio.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProgramasyproyectosModule } from './programasyproyectos/programasyproyectos.module';
import { DonacionesModule } from './donaciones/donaciones.module';
import { AuthModule } from './auth/auth.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { NosotrosModule } from './nosotros/nosotros.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorProviders } from './security/interceptor/auth.interceptor';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FloatingButtonComponent } from './floating-button/floating-button.component'; // Importa MatNativeDateModule
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerModule } from './shared/spinner/spinner.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FloatingButtonComponent,
  ],
  imports: [
    SpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    ColaboradoresModule,
    HttpClientModule,
    MatTableModule,
    NosotrosModule,
    MatTabsModule,
    MatListModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule, // Agrega MatDatepickerModule
    MatNativeDateModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,

  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
