import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Importation de la Route
import { APPROUTING } from './app.routes';

// Service

import { HerosService } from './components/services/heros.service';


// Composants
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroSeulComponent } from './components/hero-seul/hero-seul.component';

@NgModule({
  declarations: [
    //  importation de composant
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroSeulComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING // importation de la Route
  ],
  providers: [
    HerosService // importation du Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
