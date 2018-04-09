import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroListBasicComponent} from "./hero-list-basic.component";
import {HeroService} from "./hero.service";
import {HeroListInlineStylesComponent} from "./hero-list-inline-styles.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeroListCombinedTransitionsComponent} from "./hero-list-combined-transitions.component";
import {HeroListTwowayComponent} from "./hero-list-twoway.component";
import {HeroEnterLeaveComponent} from "./hero-enter-leave.component";
import {HeroListAutoComponent} from "./hero-list-auto.component";
import {HeroListTimingsComponent} from "./hero-list-timings.component";
import {HeroListMultistepComponent} from "./hero-list-multistep.component";
import {HeroListGroupsComponent} from "./hero-list-groups.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroListBasicComponent,
    HeroListInlineStylesComponent,
    HeroListCombinedTransitionsComponent,
    HeroListTwowayComponent,
    HeroEnterLeaveComponent,
    HeroListAutoComponent,
    HeroListTimingsComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
