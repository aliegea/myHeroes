import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../interfaces/comicsInterface';

@Component({
  selector: 'app-comics-card',
  templateUrl: './comics-card.component.html',
  styleUrls: ['./comics-card.component.css'],
})
export class ComicsCardComponent implements OnInit {
  @Input() comic!: Comic;
  constructor() {}

  ngOnInit(): void {}
}
