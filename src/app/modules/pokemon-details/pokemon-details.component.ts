import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon: Pokemon = {
    name:'',
    id:0,
    cp:0,
    hp:0,
    picture:'',
    types:[],
    created:new Date()    
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

  valcheckType(desiredType:string):boolean{
      return this.pokemon.types.includes(desiredType);
  }

}
