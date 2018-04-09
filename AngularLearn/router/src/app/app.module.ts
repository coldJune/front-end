import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./not-found.component";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HeroesModule} from "./heroes/heroes.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ComposeMessageComponent} from "./compose-message.component";
import {DialogService} from "./dialog.service";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {Router} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,

    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes:', JSON.stringify(router.config, undefined, 2));
  }
}
