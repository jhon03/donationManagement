import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';
import { GestiondonacionesComponent } from './gestiondonaciones/gestiondonaciones.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormcreacionproyectosComponent } from './formcreacionproyectos/formcreacionproyectos.component';
import { AuthModule } from '../auth/auth.module';
import { CreacionprogramasComponent } from './creacionprogramas/creacionprogramas.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { VersolicitudesdonacionComponent } from './versolicitudesdonacion/versolicitudesdonacion.component';
import {MatRadioModule} from '@angular/material/radio';
import { VerProgramasComponent } from './ver-programas/ver-programas.component';
import { VerProyectosComponent } from './ver-proyectos/ver-proyectos.component';
import { VerBenefactoresComponent } from './ver-benefactores/ver-benefactores.component';
import {MatIconModule} from '@angular/material/icon';
import { ActualizarProgramasComponent } from './actualizar/programas/actualizar-programas/actualizar-programas.component';
import { ActualizarProyectoComponent } from './actualizar/proyectos/actualizar-proyecto/actualizar-proyecto.component';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ConfirmarDonacionComponent } from './confirmarDonacion/confirmar-donacion/confirmar-donacion.component'

@NgModule({
  declarations: [
  
    ListcolaboradoresComponent,
       GestiondonacionesComponent,
       FormcreacionproyectosComponent,
       CreacionprogramasComponent,
       VersolicitudesdonacionComponent,
       VerProgramasComponent,
       VerProyectosComponent,
       VerBenefactoresComponent,
       ActualizarProgramasComponent,
       ActualizarProyectoComponent,
       ConfirmarDonacionComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ColaboradoresRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatToolbarModule,
    AuthModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatDatepickerModule,




  ]
})
export class ColaboradoresModule { }
