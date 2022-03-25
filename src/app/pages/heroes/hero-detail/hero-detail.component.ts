import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/interfaces/comicsInterface';
import { Heroe } from 'src/app/interfaces/HeroInterface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  heroe!: Heroe;
  comics: Comic[] = [];
  comic!: Comic;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.heroesService.getHeroesbyId(id).subscribe((heroe) => {
        this.heroe = heroe;
        console.log(this.heroe);
      });
      this.heroesService.getComicByHeroId(id).subscribe((comics) => {
        this.comics = comics;
        console.log(this.comics);
      });
    });
  }
  regresar() {
    this.router.navigate(['/heroeslist']);
  }
  addHeroe() {
    this.heroesService.sendHeroe(this.heroe);
    this.router.navigate(['/heroeTeam']);
  }
}
