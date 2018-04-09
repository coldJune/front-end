import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "./app.module";
import {HeroDetail1Component} from "./hero-detail-1.component";
import {DemoComponent} from "./demo.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroListComponent} from "./hero-list.component";
import {HeroDetail2Component} from "./hero-detail-2.component";
import {HeroDetail3Component} from "./hero-detail-3.component";
import {HeroDetail4Component} from "./hero-detail-4.component";
import {HeroDetail5Component} from "./hero-detail-5.component";
import {HeroDetail6Component} from "./hero-detail-6.component";
import {HeroDetail7Component} from "./hero-detail-7.component";
import {HeroDetail8Component} from "./hero-detail-8.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppModule,
    FormsModule
  ],
  declarations: [
    DemoComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroDetail1Component,
    HeroDetail2Component,
    HeroDetail3Component,
    HeroDetail4Component,
    HeroDetail5Component,
    HeroDetail6Component,
    HeroDetail7Component,
    HeroDetail8Component
  ],

  bootstrap: [DemoComponent]
})
export class DemoModule { }
