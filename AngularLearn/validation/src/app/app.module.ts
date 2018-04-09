import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroFormTemplateComponent} from "./template/hero-form-template.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ForbiddenNameDirective} from "./shared/forbibbden-name.directive";
import {HeroFormReactiveComponent} from "./reactive/hero-form-reactive.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    ForbiddenNameDirective,
    HeroFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
