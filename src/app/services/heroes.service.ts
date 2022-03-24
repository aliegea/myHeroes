import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Heroe } from '../interfaces/HeroInterface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'https://gateway.marvel.com/v1/public';
  private apiKey: string = 'ec57d820f047075c33f34f1a776841d3';
  private hash: string = 'e2baa1fd9a91d14827a0a3f33d8f397a';

  constructor(private http: HttpClient) {}
  getHeroes(): Observable<Heroe[]> {
    return this.http
      .get<Heroe[]>(
        `${this.baseUrl}/characters?ts=1000&apikey=${this.apiKey}&hash=${this.hash}`
      )
      .pipe(map((data: any) => data.data.results));
  }
  getHeroesbyId(id: number): Observable<Heroe> {
    return this.http
      .get<Heroe>(
        `${this.baseUrl}/characters/${id}?ts=1000&apikey=${this.apiKey}&hash=${this.hash}`
      )
      .pipe(map((data: any) => data.data.results[0]));
  }
  getSugerencias(termino: string): Observable<Heroe> {
    return this.http
      .get<Heroe>(
        `${this.baseUrl}/characters?name=${termino}&ts=1000&apikey=${this.apiKey}&hash=${this.hash}`
      )
      .pipe(map((data: any) => data.data.results[0]));
  }
}
