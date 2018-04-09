import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';
import {SizerComponent} from './sizer.component';
import {HeroSwitchComponents} from './hero-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    SizerComponent,
    HeroSwitchComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
