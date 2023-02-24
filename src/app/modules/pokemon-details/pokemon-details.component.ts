import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
pokemon: Pokemon = {
    name:'',
    id:0,
    cp:0,
    hp:0,
    picture:'',
    types:[],
    created:new Date()
  };
pokemonForm: Pokemon = {
    name:'',
    id:0,
    cp:0,
    hp:0,
    picture:'',
    types:[],
    created:new Date()
  };
  NamePokemon = "";

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonServiceService) { }

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id')!=undefined){
      let id = Number(this.route.snapshot.paramMap.get('id'));
      this.pokemon = this.pokemonService.getPokemonMonsters().filter((item) => item.id === id)[0];
      this.pokemonForm = this.pokemon;
      this.NamePokemon = this.pokemon.name;
    }

  }

  valcheckType(desiredType:string):boolean{
      return this.pokemonForm.types.includes(desiredType);
  }

  addOrDeletePokemonType({target:{checked=false}}:any, typeStr:string){
    if(!checked){
      let indexToRemove = this.pokemonForm.types.indexOf(typeStr);
      (indexToRemove > -1) ? this.pokemonForm.types.splice(indexToRemove, 1) : false;
    }
    else{
      this.pokemonForm.types.push(typeStr);
    }
  }

  saveChanges(){
    this.pokemonService.setPokemonById(this.pokemonForm)

    this.router.navigate(['/']);
  }

}
