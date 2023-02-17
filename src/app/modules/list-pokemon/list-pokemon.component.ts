import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  @Input() pokemonlist:Pokemon[]=[];
  @Output() onDeletePokemon: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  pokemonSelected:Pokemon ={
    name:'',
    id:0,
    picture:'',
    types:[],
    hp: 0,
    cp: 0,
    created:new Date()
  };


  constructor() { }

  ngOnInit(): void {
    //console.log(this.pokemonlist)
  }

  printPokemonSelected(evt:Pokemon){
    this.pokemonSelected=evt;
    console.log(`Pokémon selected: ${evt.name}`)
  }

  dltPokemon(evt:Pokemon){
    this.onDeletePokemon.emit(evt);
  }

}
