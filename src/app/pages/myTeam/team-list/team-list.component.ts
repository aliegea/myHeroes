import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { MySelectedHero } from 'src/app/interfaces/MySelectedHero';
import { HeroesService } from 'src/app/services/heroes.service';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  public teamHeroes: MySelectedHero[] = [];
  heroes!: Heroe[];
  heroe!: Heroe;
  userData: any;

  constructor(
    private heroesServ: HeroesService,
    private teamServ: TeamService,

    private router: Router,
    private snakbar: MatSnackBar,
    private matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.teamServ.getSessionHero(this.teamHeroes);

    this.heroesServ.getHeroe().subscribe((resp) => {
      this.addToTeam(resp);
    });
    this.teamHeroes = JSON.parse(
      this.teamServ.getSessionHero(this.teamHeroes) || ''
    );
    this.teamServ.setData(this.teamHeroes);
  }

  addToTeam(heroe: MySelectedHero) {
    let heroExists = false;
    for (let i in this.teamHeroes) {
      if (this.teamHeroes[i].id === heroe.id) {
        heroExists = true;
        break;
      }
    }

    if (!heroExists && this.teamHeroes.length !== 6) {
      let newHeroe: MySelectedHero = new MySelectedHero();
      newHeroe.id = heroe.id;
      newHeroe.name = heroe.name;
      newHeroe.thumbnail = heroe.thumbnail;

      this.teamHeroes.push(newHeroe);
      this.teamServ.saveSessionStorage(this.teamHeroes);
    }
  }

  removeHeroe(heroeToRemove: MySelectedHero) {
    for (let i = 0; i < this.teamHeroes.length; i++) {
      if (this.teamHeroes[i] == heroeToRemove) {
        this.teamHeroes.splice(i, 1);
      }
    }
    this.teamServ.setData(this.teamHeroes);
  }
}
