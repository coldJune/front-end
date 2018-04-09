import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroBioComponent} from "./hero/hero-bio.component";
import {FormsModule} from "@angular/forms";
import {HeroBiosAndContactsComponent, HeroBiosComponent} from "./hero/hero-bios.component";
import {HeroContactComponent} from "./hero/hero-contact.component";
import {HighlightDirective} from "./highlight.directive";
import {HeroOfTheMonthComponent} from "./hero/hero-of-the-month.component";
import {HeroesBaseComponent, SortedHeroesComponent} from "./hero/sorted-heroes.component";
import {
  AlexComponent, AliceComponent,
  BarryComponent,
  BethComponent, BobComponent, CarolComponent, CathyComponent, ChrisComponent,
  CraigComponent, ParentFinderComponent
} from "./parent-finder.component";
const a_components = [AliceComponent, AlexComponent ];

const b_components = [ BarryComponent, BethComponent, BobComponent ];

const c_components = [
  CarolComponent, ChrisComponent, CraigComponent,
  CathyComponent
];
@NgModule({
  declarations: [
    AppComponent,
    HeroBioComponent,
    HeroBiosComponent,
    HeroContactComponent,
    HeroBiosAndContactsComponent,
    HighlightDirective,
    HeroOfTheMonthComponent,
    HeroesBaseComponent,
    SortedHeroesComponent,
    a_components,
    b_components,
    c_components,
    ParentFinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
