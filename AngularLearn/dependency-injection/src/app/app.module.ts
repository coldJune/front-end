import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CarComponent} from "./car/car.component";
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {InjectorComponent} from "./injector.component";
import {TestComponent} from "./test.component";
import {UserService} from "./user.service";
import {APP_CONFIG, HERO_DI_CONFIG} from "./app.config";
import {
  Provider10Component,
  Provider1Component, Provider2Component, Provider3Component, Provider4Component, Provider6aComponent,
  Provider6bComponet, Provider7Component, Provider8Component, Provider9Component,
  ProvidersComponent
} from "./providers.component";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HeroListComponent,
    HeroesComponent,
    InjectorComponent,
    TestComponent,
    ProvidersComponent,
    Provider1Component,
    Provider2Component,
    Provider3Component,
    Provider4Component,
    Provider6aComponent,
    Provider6bComponet,
    Provider7Component,
    Provider8Component,
    Provider9Component,
    Provider10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService,
    {
    provide: APP_CONFIG, useValue: HERO_DI_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
