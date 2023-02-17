import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PagComponent } from './modules/pag/pag.component';
import { ListPokemonComponent } from './modules/list-pokemon/list-pokemon.component';
import { PokemonFilterTextPipe } from './pipes/pokemon-filter-text.pipe';
import { PokemonDetailsComponent } from './modules/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagComponent,
    ListPokemonComponent,
    PokemonFilterTextPipe,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokemonFilterTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
