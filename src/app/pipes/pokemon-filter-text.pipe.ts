import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterTextPipe implements PipeTransform {

  transform(items: Pokemon[], searchText: string, templist:Pokemon[]): Pokemon[] {
    // if (!items) return [];
    // if (!searchText) return items;

    if (!items || !searchText) {
            return templist;
        }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }

}
