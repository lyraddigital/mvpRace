import { 
  Component, 
  Input,
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

import { BasketballPlayer } from '../models/player';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  playerToEdit: BasketballPlayer;
  editName: boolean;
  editBio: boolean;

  constructor() {
    console.log('EditPlayerComponent constructor called');
  }

  ngOnChanges() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngOnChanges called');
  }

  ngOnInit() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngOnInit called');
  }

  ngDoCheck() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('EditPlayerComponent ' + this.playerToEdit.name + ' ngOnDestroy called');
  }

  getDisplayFlag(flag: boolean): string {
    return flag ? "inline": "none";
  }

  getDisplayBlockFlag(flag: boolean): string {
    return flag ? "block": "none";
  }

  showEditName() {
    this.editName = true;
  }

  saveName() {
    this.editName = false;
  }

  showEditBio() {
    this.editBio = true;
  }

  saveBio() {
    this.editBio = false;
  }
}
