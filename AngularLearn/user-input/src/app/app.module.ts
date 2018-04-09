import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClickMeCompoent} from "./click-me.compoent";
import {KeyupComponent_v1, KeyupComponent_v2, KeyupComponent_v3, KeyupComponent_v4} from "./keyup.component";
import {LoopBackComponent} from "./loop-back.component";
import {LittleTourComponent} from "./little-tour.component";

@NgModule({
  declarations: [
    AppComponent,
    ClickMeCompoent,
    LoopBackComponent,
    KeyupComponent_v1,
    KeyupComponent_v2,
    KeyupComponent_v3,
    KeyupComponent_v4,
    LittleTourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
