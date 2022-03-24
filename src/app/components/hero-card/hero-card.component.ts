import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() heroe!: Heroe;

  constructor(private heroesService: HeroesService) {}

  addHero() {
    this.heroesService.sendHeroe(this.heroe);
  }

  ngOnInit(): void {}
}
