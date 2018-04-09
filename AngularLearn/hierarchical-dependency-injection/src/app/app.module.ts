import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {VillainsListComponent} from "./villains/villains-list.component";
import {FormsModule} from "@angular/forms";
import {HeroTaxReturnComponent} from "./hero/hero-tax-return.component";
import {HeroListComponent} from "./hero/hero-list.component";
import {HeroesService} from "./hero/heroes.service";
import {ACarComponent, BCarComponent, carComponents, carService, CCarComponent} from "./car/car.component";

@NgModule({
  declarations: [
    AppComponent,
    VillainsListComponent,
    HeroTaxReturnComponent,
    HeroListComponent,
    carComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroesService,carService],
  bootstrap: [AppComponent]
})
export class AppModule { }
