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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  selectedPlayer: BasketballPlayer;

  constructor() {
    console.log("DashboardComponent contructor called");
  }

  ngOnChanges() {
    console.log("DashboardComponent ngOnChanges called");
  }

  ngOnInit() {
    console.log("DashboardComponent ngOnInit called");
  }

  ngDoCheck() {
    console.log("DashboardComponent ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("DashboardComponent ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("DashboardComponent ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("DashboardComponent ngAfterViewInit called");
  }

  ngAfterViewChecked() {
    console.log("DashboardComponent ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("DashboardComponent ngOnDestroy called");
  }
}
