import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Projetos } from './pages/projetos/projetos';
import { Estudos }from './pages/estudos/estudos'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'projetos', component: Projetos },
  { path: 'estudos', component: Estudos},
  { path: '**', redirectTo: 'home' } // Redireciona qualquer link inválido para a Home
];