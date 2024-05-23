import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { error } from 'console';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  name: any = [];
  urlImage: any = [];
  // data: any[] = [];
  pokemonData: any;
  searchQuery: any;
  detailPokemon: any;
  error: any;
  panelOpenState = false;

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    // this.llenarData()
  }

  searchPokemon(): void {
    // this.error
    this.pokemonService.getPokemonList(this.searchQuery.toLowerCase()).subscribe(data => {
      this.pokemonData = data
    },
      error => {
        this.error = 'Este Pokemón no se encuentra o no existe';
        this.pokemonData = null
      }
    );
  }

  detailPokemons(event: MouseEvent): void {
    this.pokemonService.getPkemonDetail(this.detailPokemon).subscribe(data => {
      this.pokemonData = data
    })
    console.log('detalles', this.detailPokemon);
    console.log('detalles', this.pokemonData);
  }



  // search(){
  //   this.pokemonService.getPokemonTwo(this.name).subscribe( (data:any) => {
  //     this.urlImage = data.sprites.front_default
  //     console.log('la data', data)
  //   })
  //   console.log('here', this.name);
  // }

  // llenarData(){
  //   this.pokemonService.getPokemonList(this.name).subscribe( (data: any) => {
  //     this.urlImage = data.sprites.front_default
  //     console.log('imagen',this.data);
  //   })
  // }


  // llenarData(){
  //   this.pokemonService.getPokemonList(this.name).subscribe ( data => {
  //     this.data = data;
  //     console.log(this.data);

  //   })
  // }
}
