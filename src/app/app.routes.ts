import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from '../app/components/heroes/heroes.component';
import {HeroeComponent} from '../app/components/heroe/heroe.component';
import {HeroesEditComponent} from '../app/components/heroes-edit/heroes-edit.component';

const app_routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path:'heroe/:id' , component: HeroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
