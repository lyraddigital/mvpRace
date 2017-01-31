import { 
  Component, 
  Input,
  Output,
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  EventEmitter
} from '@angular/core';

import { BasketballPlayer } from '../models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  selectedPlayer: BasketballPlayer;

  @Output()
  chosen: EventEmitter<BasketballPlayer>

  constructor() {
    this.chosen = new EventEmitter<BasketballPlayer>();
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' constructor called');
  }

  ngOnChanges() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngOnChanges called');
  }

  ngOnInit() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngOnInit called');
  }

  ngDoCheck() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('PlayerCardComponent' + this.getSelectedPlayerName() + ' ngOnDestroy called');
  }

  choosePlayer() {
    this.chosen.emit(this.selectedPlayer);
  }

  private getSelectedPlayerName() : string {
    if(this.selectedPlayer)
    {
      return ' (' + this.selectedPlayer.name + ')';
    }

    return '';
  }
}
