import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite : boolean;
  @Output() change2 = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.isFavorite)
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change2.emit({ newValue: this.isFavorite });
  }
}
export interface favoriteInterface {
  newValue: boolean
}