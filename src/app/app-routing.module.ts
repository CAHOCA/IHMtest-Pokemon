import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PokemonDetailsComponent } from './modules/pokemon-details/pokemon-details.component';

const routes: Routes = [
{
    path: '',
    component : HomeComponent
  },
  {
    path: 'editPokemon/:id',
    component: PokemonDetailsComponent,
    data: { animation: 'routeAnimations' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
