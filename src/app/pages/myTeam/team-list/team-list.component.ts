import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { MySelectedHero } from 'src/app/interfaces/MySelectedHero';
import { HeroesService } from 'src/app/services/heroes.service';
import { TeamService } from '../../../services/team.service';
import { MyTeam } from '../../../interfaces/MyTeam';

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
  edit: boolean = false;
  heroExists: boolean = false;

  myTeam: MyTeam = {
    nombre: 'My Heroes',
    descripcion: 'Mis héroes favoritos',
  };

  constructor(
    private heroesServ: HeroesService,
    private teamServ: TeamService,

    private router: Router,
    private snakbar: MatSnackBar,
    private matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.heroesServ.getHeroe().subscribe((resp) => {
      this.addToTeam(resp);
    });

    this.teamServ.getTeamData().subscribe((resp) => {
      this.myTeam = resp;
    });
    this.myTeam = JSON.parse(localStorage.getItem('My Team') || '');

    this.teamHeroes = JSON.parse(localStorage.getItem('My Heroes') || '');
  }

  addToTeam(heroe: MySelectedHero) {
    for (let i in this.teamHeroes) {
      if (this.teamHeroes[i].id === heroe.id) {
        this.heroExists = true;

        break;
      }
    }

    if (!this.heroExists && this.teamHeroes.length !== 6) {
      let newHeroe: MySelectedHero = new MySelectedHero();
      newHeroe.id = heroe.id;
      newHeroe.name = heroe.name;
      newHeroe.thumbnail = heroe.thumbnail;

      this.teamHeroes.push(newHeroe);

      localStorage.setItem('My Heroes', JSON.stringify(this.teamHeroes));
    }
  }

  removeHeroe(heroeToRemove: MySelectedHero) {
    confirm(` Estàs seguro de que deseas eliminar a${heroeToRemove.name}?`);
    for (let i = 0; i < this.teamHeroes.length; i++) {
      if (this.teamHeroes[i] == heroeToRemove) {
        this.teamHeroes.splice(i, 1);
      }
    }

    localStorage.setItem('My Heroes', JSON.stringify(this.teamHeroes));
  }
  editar() {
    this.edit = !this.edit;
  }
}
