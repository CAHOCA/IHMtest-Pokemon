import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonServiceService } from 'src/app/services/pokemon-service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemonlist:Pokemon[]=[];


  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit(): void {
    this.pokemonlist=this.pokemonService.getPokemonMonsters();
  }

  printPokemonSelected(evt:Pokemon){
    console.log(`Pokémon selected: ${evt.name}`)
  }

  deletePokemon(evt:Pokemon){
    let index = this.pokemonlist.findIndex(obj => obj.id === evt.id);

    if (index !== -1) {
      this.pokemonlist.splice(index, 1);
    }
  }

}
