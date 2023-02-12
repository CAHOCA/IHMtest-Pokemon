import { Injectable } from '@angular/core';
import { PokemonMonsters } from '../database/mock-pokemon';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor() { }

  getPokemonMonsters():Pokemon []{
    return PokemonMonsters;
  }
}
