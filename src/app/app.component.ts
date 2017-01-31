import { 
  Component,  
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy 
} from '@angular/core';

import { BasketballPlayer } from './models/player';
import { GameLogEntry } from './models/gameLog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  selectedPlayer: BasketballPlayer;
  leftPlayer: BasketballPlayer;
  rightPlayer: BasketballPlayer;

  constructor() {
    this.leftPlayer = new BasketballPlayer();
    this.rightPlayer = new BasketballPlayer();

    this.leftPlayer.id = 1;
    this.rightPlayer.id = 2;

    this.leftPlayer.name = 'James Harden';
    this.rightPlayer.name = 'Russell Westbrook';

    this.leftPlayer.bio = `
        Becoming more of an all round point guard this year and averaging over 10 assists per game for the first time in his 
        career James Harden is having a great season with the Houston Rockets. He's also much more consistent with his ball 
        handling, now only turning it over about 3.4 times a game as opposed to nearly 4.5 the year before. He is still also 
        averaging 26 points a game.
    `;

    this.rightPlayer.bio = `
        This year almost being a walking triple double, Russell Westbrook has embraced carrying the Thunder on his shoulders
        and doing whatever is possible for his team to win games. Knowing he can't do all the scoring alone, he is distributing
        the ball at an advanced rate, and making all his team mates better. On top of this he is also average over 30 points per game.
        His only issue at this point is his field goal percentage which is in the low 40s. He is currently the favourite to win
        the MVP.
    `;

    this.leftPlayer.imagePath = '/assets/james_harden.jpg';
    this.rightPlayer.imagePath = '/assets/russell_westbrook.jpg';

    this.leftPlayer.cardCssClass = 'rockets';
    this.rightPlayer.cardCssClass = 'thunder';

    this.leftPlayer.gameLogs = [
      new GameLogEntry(33, 12, 10),
      new GameLogEntry(26, 8, 7),
      new GameLogEntry(28, 4, 13),
      new GameLogEntry(31, 7, 9),
      new GameLogEntry(44, 6, 14)
    ];

    console.log('AppComponent constructor called');
  }

  ngOnChanges() {
    console.log('AppComponent ngOnChanges called');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit called');
  }

  ngDoCheck() {
    console.log('AppComponent ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('AppComponent ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('AppComponent ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('AppComponent ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('AppComponent ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('AppComponent ngOnDestroy called');
  }

  selectPlayer(player: BasketballPlayer) {
    this.selectedPlayer = player;
  }
}
