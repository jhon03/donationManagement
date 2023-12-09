import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfogestionsocialComponent } from './infogestionsocial/infogestionsocial.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PsicopedagogicoComponent } from './psicopedagogico/psicopedagogico.component';
import { EPCComponent } from './epc/epc.component';
import { BancoAlimentosComponent } from './banco-alimentos/banco-alimentos.component';


const routes: Routes = [

  {
    path:'',
   component: InfogestionsocialComponent
  },

  {
    path: 'infogestionsocial',
    component: InfogestionsocialComponent
  },

  {

    path: 'biblioteca',
    component: BibliotecaComponent
  },

  {
    path: 'psicopedagogico',
    component: PsicopedagogicoComponent
  },

  {
    path:'EscuelaCuidadores',
    component: EPCComponent
  },

  {
    path:'BancoAlimentos',
    component: BancoAlimentosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionSocialRoutingModule { }
