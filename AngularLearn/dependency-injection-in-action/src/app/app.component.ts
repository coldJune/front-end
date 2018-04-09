import { Component } from '@angular/core';
import {LoggerService} from "./logger.service";
import {UserService} from "./user.service";
import {UserContextService} from "./user-context.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService, UserContextService, UserService]
})
export class AppComponent {
  private userId =1 ;
  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}
