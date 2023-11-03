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
    path: 'gestiondonaciones',
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
    component: VersolicitudesdonacionComponent
  },

  {
    path: 'VerProgramas',
    component: VerProgramasComponent
  },

  {
    path: 'VerProyectos',
    component: VerProyectosComponent
  },

  {
  path: 'verBenefactores',
  component: VerBenefactoresComponent
  },
  {path: 'editar/programa/:id', component: ActualizarProgramasComponent, pathMatch :'full'},
  {path: 'editar/proyecto/:id', component: ActualizarProyectoComponent, pathMatch :'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
