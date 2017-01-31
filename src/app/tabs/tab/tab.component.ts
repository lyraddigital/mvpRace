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

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  title: string;

  @Input()
  isActive: boolean;

  getId() {
    return this.title.replace(' ', '').toLowerCase();
  }

  constructor() {
    console.log("TabComponent constructor called. The id is not yet set as it's an input.");
  }

  ngOnChanges() {
    console.log("TabComponent " + this.getId() + " ngOnChanges called");
  }

  ngOnInit() {
    console.log("TabComponent " + this.getId() + " ngOnInit called");
  }

  ngDoCheck() {
    console.log("TabComponent " + this.getId() + " ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("TabComponent " + this.getId() + " ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("TabComponent " + this.getId() + " ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("TabComponent " + this.getId() + " ngAfterViewInit called");
  }

  ngAfterViewChecked() {
    console.log("TabComponent " + this.getId() + " ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("TabComponent " + this.getId() + " ngOnDestroy called");
  }
}