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

@NgModule({
  declarations: [
  
    ListcolaboradoresComponent,
       GestiondonacionesComponent,
       FormcreacionproyectosComponent,
       CreacionprogramasComponent,
       VersolicitudesdonacionComponent,
   
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatToolbarModule,
    AuthModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatCardModule




  ]
})
export class ColaboradoresModule { }
