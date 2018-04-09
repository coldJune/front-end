import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SpyDirective} from './spy.directive';
import {FormsModule} from '@angular/forms';
import {SpyComponent} from './spy.component';
import {LoggerService} from './logger.service';
import {OnChangesComponent, OnChangesParentComponent} from './on-changes.component';
import {DoCheckComponent, DocheckParentComponent} from './do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    SpyDirective,
    SpyComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckComponent,
    DocheckParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
