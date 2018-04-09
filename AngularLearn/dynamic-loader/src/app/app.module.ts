import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AdDirective} from "./ad.directive";
import {AdComponent} from "./ad.component";
import {AdBannerComponent} from "./ad-banner.component";
import {HeroJobAdComponent} from "./hero-job-ad.component";
import {HeroProfileComponent} from "./hero-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
