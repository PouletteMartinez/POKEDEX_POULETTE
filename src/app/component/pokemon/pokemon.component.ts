import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { error } from 'console';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  name: any = [];
  urlImage: any = [];
  pokemonData: any;
  searchQuery: any;
  detailPokemon: any;
  error: any;
  panelOpenState = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
  }

  searchPokemon(): void {
    this.pokemonService
      .getPokemonList(this.searchQuery.toLowerCase())
      .subscribe(
        (data) => {
          this.pokemonData = data;
        },
        (error) => {
          this.error = 'Este Pokemón no se encuentra o no existe';
          this.pokemonData = null;
        }
      );
  }
}
