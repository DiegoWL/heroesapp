import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//RUTAS
import {APP_ROUTING} from './app.routes';
//servicios
import {HeroesService} from '../app/services/heroes.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesEditComponent } from './components/heroes-edit/heroes-edit.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { KeysPipe } from './pipes/keys.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesEditComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
