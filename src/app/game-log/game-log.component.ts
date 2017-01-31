import { Component, Input } from '@angular/core';

import { BasketballPlayer } from '../models/player';

@Component({
  selector: 'app-game-log',
  templateUrl: './game-log.component.html',
  styleUrls: ['./game-log.component.css']
})
export class GameLogComponent {
  @Input()
  playerForLog: BasketballPlayer;

  constructor() {
    console.log('GameLogComponent constructor called');
  }

  ngOnChanges() {
    console.log('GameLogComponent ngOnChanges called');
  }

  ngOnInit() {
    console.log('GameLogComponent ngOnInit called');
  }

  ngDoCheck() {
    console.log('GameLogComponent ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('GameLogComponent ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('GameLogComponent ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('GameLogComponent ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('GameLogComponent ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('GameLogComponent ngOnDestroy called');
  }
}
