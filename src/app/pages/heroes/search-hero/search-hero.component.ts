import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css'],
})
export class SearchHeroComponent implements OnInit {
  termino: string = '';
  heroes!: Heroe[];
  heroeSeleccionado!: Heroe | '';
  constructor(private heroesServ: HeroesService) {}

  ngOnInit(): void {}
  buscando() {
    this.heroesServ
      .getSugerencias(this.termino)
      .subscribe((resp) => (this.heroes = resp));
  }
  opcionSel(event: any) {
    if (!event.option.value) {
      this.heroeSeleccionado = '';
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.name;

    this.heroesServ
      .getHeroesbyId(heroe.id!)
      .subscribe((res) => (this.heroeSeleccionado = heroe));
  }
}
