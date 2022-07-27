import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: Array<any> = [];
  public setAllPokemons: Array<any> = [];

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(res);
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter(pokemon => {
      return !pokemon.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

}
