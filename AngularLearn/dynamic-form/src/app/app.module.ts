import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormComponent} from "./dynamic-form.component";
import {DynamicQuestionComponent} from "./dynamic-question.component";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
