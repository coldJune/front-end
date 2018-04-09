import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroParentComponent} from './hero-parent.component';
import {NameChildComponent} from './name-child.component';
import {NameParentComponent} from './name-parent.component';
import {VersionChildComponent} from './version-child.component';
import {VersionParentComponent} from './version.parent.component';
import {VoterComponent} from './voter.component';
import {VotetakerComponent} from './votetaker.component';
import {CountdownTimerComponent} from "./countdown-timer.component";
import {CountdownLocalVarParentComponent} from "./countdown-parent.component";
import {AstronautComponent} from "./astronaut.component";
import {MissioncontrolComponent} from "./missioncontrol.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    AstronautComponent,
    MissioncontrolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
