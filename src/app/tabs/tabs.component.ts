import { 
  Component, 
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  ContentChildren, 
  QueryList } from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;

  constructor() {
    console.log("TabsComponent constructor called");
  }

  ngOnChanges() {
    console.log("TabsComponent ngOnChanges called");
  }

  ngOnInit() {
    console.log("TabsComponent ngOnInit called");
  }

  ngDoCheck() {
    console.log("TabsComponent ngDoCheck called");
  }

  ngAfterContentInit() {
    if(this.tabList.length > 0)
    {
      this.tabList.first.isActive = true;
    }

    console.log("TabsComponent ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("TabsComponent ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("TabsComponent ngAfterViewInit called");
  }

  ngAfterViewChecked() {
    console.log("TabsComponent ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("TabsComponent ngOnDestroy called");
  }

  activateTab(tab: TabComponent, e) {
    this.tabList.forEach(t => t.isActive = false);
    tab.isActive = true;

    e.preventDefault();
  }

  getTabLink(tab: TabComponent): string {
    return '#' + tab.getId();
  }
}