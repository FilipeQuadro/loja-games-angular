import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

// Rotas do site: cada caminho (path) abre um componente
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } // qualquer endereço errado volta para o início
];

@NgModule({
  // useHash deixa as rotas funcionando também no GitHub Pages (ex.: /#/login)
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
