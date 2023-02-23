import { Injectable } from '@angular/core';
import { PokemonMonsters } from '../database/mock-pokemon';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private pokemonMonsters: Pokemon[] = [];

  constructor() { }

  getPokemonMonsters():Pokemon []{
    this.pokemonMonsters = PokemonMonsters;
    return this.pokemonMonsters;
  }

  setPokemonById(Pk:Pokemon):boolean{
    let pokemonToUpdate =  this.pokemonMonsters.find(pokemon => pokemon.id === Pk.id);
    if(pokemonToUpdate != undefined){
        pokemonToUpdate.name = Pk.name;
        pokemonToUpdate.cp = Pk.cp;
        pokemonToUpdate.hp = Pk.hp;
        pokemonToUpdate.types = Pk.types;
        return true;
    }
    return false;
  }
}
