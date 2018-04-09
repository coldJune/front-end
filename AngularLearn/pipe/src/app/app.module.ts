import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ExponentialStrengthPipe} from "./exponential-strength.pipe";
import {PowerBoosterComponent} from "./power-booster.component";
import {FormsModule} from "@angular/forms";
import {PowerBoostCalculatorComponent} from "./power-boost-calculator.component";
import {HeroBirthday1Component} from "./hero-birthday1.component";
import {HeroBirthday2Component} from "./hero-birthday2.component";
import {FetchJsonPipe} from "./fetch-json.pipe";
import {HeroListComponent} from "./hero-list.componet";
import {HttpModule} from "@angular/http";
import {FlyingHeroesImpurePipe, FlyingHeroesPipe} from "./flying-heroes.pipe";
import {FlyingHeroesComponent, FlyingHeroesImpureComponent} from "./flying-heroes.component";

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    HeroBirthday1Component,
    HeroBirthday2Component,
    FetchJsonPipe,
    HeroListComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesImpureComponent,
    FlyingHeroesComponent
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
