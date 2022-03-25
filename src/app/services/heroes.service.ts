import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Comic } from '../interfaces/comicsInterface';
import { Heroe } from '../interfaces/HeroInterface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'https://gateway.marvel.com/v1/public';
  private apiKey: string = 'ec57d820f047075c33f34f1a776841d3';
  private hash: string = 'e2baa1fd9a91d14827a0a3f33d8f397a';
  subject = new Subject<Heroe>();

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
  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http
      .get<Heroe[]>(
        `${this.baseUrl}/characters?nameStartsWith=${termino}&ts=1000&apikey=${this.apiKey}&hash=${this.hash}`
      )
      .pipe(map((data: any) => data.data.results));
  }
  getComicByHeroId(id: number): Observable<Comic[]> {
    return this.http
      .get<Comic>(
        `${this.baseUrl}/characters/${id}/comics?limit=4&ts=1000&apikey=${this.apiKey}&hash=${this.hash}`
      )
      .pipe(map((data: any) => data.data.results));
  }

  sendHeroe(heroe: Heroe) {
    this.subject.next(heroe);
  }

  getHeroe(): Observable<Heroe> {
    return this.subject.asObservable();
  }
}
