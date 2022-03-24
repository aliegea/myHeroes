import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HeroesListComponent } from './pages/heroes/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './pages/heroes/hero-detail/hero-detail.component';
import { TeamListComponent } from './pages/myTeam/team-list/team-list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ConfirmAddComponent } from './components/confirm-add/confirm-add.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { TeamFormComponent } from './pages/myTeam/team-form/team-form.component';
import { ConfirmUpdateComponent } from './components/confirm-update/confirm-update.component';

import { SearchHeroComponent } from './pages/heroes/search-hero/search-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent,
    TeamListComponent,
    HeroCardComponent,
    ConfirmAddComponent,
    ConfirmDeleteComponent,
    TeamFormComponent,
    ConfirmUpdateComponent,
    SearchHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
