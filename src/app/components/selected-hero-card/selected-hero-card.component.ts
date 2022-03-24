import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MySelectedHero } from 'src/app/interfaces/MySelectedHero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-selected-hero-card',
  templateUrl: './selected-hero-card.component.html',
  styleUrls: ['./selected-hero-card.component.css'],
})
export class SelectedHeroCardComponent implements OnInit {
  @Input() heroe!: MySelectedHero;
  @Output() remove = new EventEmitter<MySelectedHero>();
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}
  sendItemToRemove(value: MySelectedHero) {
    this.remove.emit(value);
  }
}
