import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { GameLogComponent } from './game-log/game-log.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    DashboardComponent,
    TabsComponent,
    TabComponent,
    EditPlayerComponent,
    GameLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
