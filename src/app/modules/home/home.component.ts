import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonFilterTextPipe } from 'src/app/pipes/pokemon-filter-text.pipe';
import { PokemonServiceService } from 'src/app/services/pokemon-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

title="Pokémon";
lst: Pokemon[]=[];
lstt:Pokemon[]=[];

  constructor(private pokemonService: PokemonServiceService,
              private filterPipe: PokemonFilterTextPipe) { }

  ngOnInit(): void {
    this.lst=this.pokemonService.getPokemonMonsters();
    this.lstt=this.lst;
  }

  deletePokemon(evt:Pokemon){
    let index = this.lst.findIndex(obj => obj.id === evt.id);

    if (index !== -1) {
      this.lst.splice(index, 1);
      this.lstt.splice(index, 1);
    }
  }


  filterPokemon(evt:any){

    this.lst = this.filterPipe.transform(this.lst, evt.target.value,this.lstt);
    //console.log(requiredResult)
  }


}
