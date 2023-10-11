import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m =>m.InicioModule)
  },
  {
    path: 'nosotros',
    loadChildren:() => import('./nosotros/nosotros.module').then(m => m.NosotrosModule)
  },

  {
    path: 'gestion-social',
    loadChildren:() => import('./gestion-social/gestion-social.module').then(m => m.GestionSocialModule)
  },
  
{
  path: 'programasyproyectos',
  loadChildren:() => import('./programasyproyectos/programasyproyectos.module').then(m => m.ProgramasyproyectosModule)
},

{
  path: 'donaciones',
  loadChildren: () => import('./donaciones/donaciones.module').then(m => m.DonacionesModule)
},

{
  path: 'autenticacion',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'colaboradores',
  loadChildren: () => import('./colaboradores/colaboradores.module').then(m => m.ColaboradoresModule)
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
