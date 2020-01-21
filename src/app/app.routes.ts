// toutes les routes qu'on a besoin doit être importer

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroSeulComponent } from './components/hero-seul/hero-seul.component';


// c'est constante de array de route. chaque route a une path et composant
const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'heroSeul/:id', component: HeroSeulComponent },

  //  c'est une route especial si dans le cas n'arrive pas à charger les autres routes. elle nous amene a cette route
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

// c'est seul dossier qu'on va importer car elle a export. c'est la constante qu'on utilise pour impoter les routes dans le app.module
export const APPROUTING = RouterModule.forRoot(ROUTES);
