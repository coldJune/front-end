import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroTeamComponent} from "./hero-team.component";
import {HeroDetailsComponent} from "./hero-details.component";
import {HeroAppMainComponent} from "./hero-app-main.component";
import {HeroControlsComponent} from "./hero-controls.component";
import {QuestSummaryComponent} from "./quest-summary.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroTeamComponent,
    HeroDetailsComponent,
    HeroAppMainComponent,
    HeroControlsComponent,
    QuestSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
