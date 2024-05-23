import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  // getPokemonList(name?: string): Observable<any> {
  //   return this.http.get<any>(this.url + name)
  // }

  // getPokemon(name: string) {
  //   return this.http.get( `${this.url} / ${name}`)
  // }


  getPokemonList(name: string): Observable<any> {
    const url = `${this.url}/${name}`
    return this.http.get<any>(this.url + name)
  }

  getPkemonDetail( detail: string): Observable<any>{
    const url = `${this.url}/${detail}`
    return this.http.get<any>(this.url + detail)
  }

}
