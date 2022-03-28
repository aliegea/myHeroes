import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { MySelectedHero } from 'src/app/interfaces/MySelectedHero';
import { HeroesService } from '../../services/heroes.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() heroe!: Heroe;
  teamHeroes: MySelectedHero[] = [];

  constructor(
    private heroesService: HeroesService,
    private route: Router,
    private teamService: TeamService
  ) {}

  addHero() {
    this.heroesService.sendHeroe(this.heroe);

    this.route.navigate(['/heroeTeam']);
  }

  ngOnInit(): void {}
}
