import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './pages/heroes/heroes-list/heroes-list.component';
import { SearchHeroComponent } from './pages/heroes/search-hero/search-hero.component';
import { TeamFormComponent } from './pages/myTeam/team-form/team-form.component';
import { TeamListComponent } from './pages/myTeam/team-list/team-list.component';
import { HeroDetailComponent } from './pages/heroes/hero-detail/hero-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent,
  },
  {
    path: 'heroeslist',
    component: HeroesListComponent,
  },
  {
    path: 'searchHero',
    component: SearchHeroComponent,
  },
  {
    path: 'teamEdit',
    component: TeamFormComponent,
  },
  {
    path: 'heroeTeam',
    component: TeamListComponent,
  },
  {
    path: ':id',
    component: HeroDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'Home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
