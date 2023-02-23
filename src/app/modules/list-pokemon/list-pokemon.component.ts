import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private router:Router) { }

  ngOnInit(): void {
     const navigation = this.router.getCurrentNavigation();
     console.log(navigation)
      if (navigation?.extras?.state) {
        const data = navigation.extras.state.data;
        console.log(data)
      }
  }

  printPokemonSelected(evt:Pokemon){
    console.log(`Pokémon selected: ${evt.name}`)
  }

  dltPokemon(evt:Pokemon){
    this.onDeletePokemon.emit(evt);
  }

  editPokemon(evt:Pokemon){    
    this.pokemonSelected=evt;
    this.router.navigate(['editPokemon/',evt.id]);
  }

}
