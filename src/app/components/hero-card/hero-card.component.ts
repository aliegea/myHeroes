import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/HeroInterface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() heroe!: Heroe;

  constructor() {}

  ngOnInit(): void {}
}
