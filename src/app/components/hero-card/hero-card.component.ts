import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { HeroesService } from '../../services/heroes.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() heroe!: Heroe;
  teamHeros!: any;

  constructor(
    private heroesService: HeroesService,
    private route: Router,
    private teamService: TeamService
  ) {}

  addHero() {
    this.heroesService.sendHeroe(this.heroe);
    this.teamService.getTeamData().subscribe((resp) => {
      this.teamHeros = resp;
    });
    if (localStorage.getItem('my Heroes') == undefined) {
      sessionStorage.setItem('My Heroes', JSON.stringify(this.teamHeros));
    }
    this.route.navigate(['/heroeTeam']);
  }

  ngOnInit(): void {}
}
