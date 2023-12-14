import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcolaboradoresComponent } from './listcolaboradores/listcolaboradores.component';
import { GestiondonacionesComponent } from './gestiondonaciones/gestiondonaciones.component';
import { FormcreacionproyectosComponent } from './formcreacionproyectos/formcreacionproyectos.component';
import { CreacionprogramasComponent } from './creacionprogramas/creacionprogramas.component';
import { VersolicitudesdonacionComponent } from './versolicitudesdonacion/versolicitudesdonacion.component';
import { AuthGuard } from '../security/guard/auth.guard';
import { VerProgramasComponent } from './ver-programas/ver-programas.component';
import { VerProyectosComponent } from './ver-proyectos/ver-proyectos.component';
import { VerBenefactoresComponent } from './ver-benefactores/ver-benefactores.component';
import { ActualizarProgramasComponent } from './actualizar/programas/actualizar-programas/actualizar-programas.component';
import { ActualizarProyectoComponent } from './actualizar/proyectos/actualizar-proyecto/actualizar-proyecto.component';
import { ConfirmarDonacionComponent } from './confirmarDonacion/confirmar-donacion/confirmar-donacion.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  
  {
    path: 'listcolaboradores',
    component: ListcolaboradoresComponent,
    canActivate: [AuthGuard]  
  //con el canactive:[authguard] protege las rutas solo acceden usuarios auntenticados
  },

  {
    path: 'gestiondonaciones/:uid',
    component: GestiondonacionesComponent,
    canActivate: [AuthGuard]
  },
  

  {
    path: 'creacionproyectos',
    component: FormcreacionproyectosComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'creacionprogramas',
    component: CreacionprogramasComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'versolicitudesdedonacion',
    component: VersolicitudesdonacionComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'VerProgramas',
    component: VerProgramasComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'VerProyectos',
    component: VerProyectosComponent,
    canActivate: [AuthGuard]
  },

  {
  path: 'verBenefactores',
  component: VerBenefactoresComponent,
  canActivate: [AuthGuard]
  },
  {path: 'editar/programa/:id', component: ActualizarProgramasComponent, pathMatch :'full', canActivate: [AuthGuard]},
  {path: 'editar/proyecto/:id', component: ActualizarProyectoComponent, pathMatch :'full', canActivate: [AuthGuard]},

  {path: 'donaciones/formulario/terminar/:token/:id', component: ConfirmarDonacionComponent, pathMatch :'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
