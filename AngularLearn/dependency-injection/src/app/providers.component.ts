
import {Component, Inject, Injectable, OnInit, Optional} from "@angular/core";
import {Logger} from "./logger.service";
import {UserService} from "./user.service";
import {HeroService} from "./heroes/hero.service";
import {heroServiceProvider} from "./heroes/hero.service.provider";
import {APP_CONFIG, AppConfig, HERO_DI_CONFIG} from "./app.config";

let template = '{{log}}';
@Component({
  selector: 'provider-1',
  template: template,
  providers: [Logger]
})
export class Provider1Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provided with Logger class');
    this.log = logger.logs[0];
  }
}
/////////////////////////////////////////
@Component({
  selector: 'provider-2',
  template: template,
  providers: [{provide: Logger, useClass: Logger}]
})
export class Provider2Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useClass: Logger');
    this.log = logger.logs[0];
  }
}
/////////////////////////////////////

export class BetterLogger extends Logger {}

@Component({
  selector: 'provider-3',
  template: template,
  providers: [{provide: Logger, useClass: BetterLogger}]
})
export class Provider3Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useClass:BetterLogger');
    this.log = logger.logs[0];
  }
}
///////////////////////////////
@Injectable()
export class EventBetterLogger extends Logger {
  constructor(private userService: UserService) {super(); }
  log(message: string) {
    let name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}
@Component({
  selector: 'provider-4',
  template: template,
  providers: [UserService,
    { provide: Logger, useClass: EventBetterLogger}
    ]
})
export class Provider4Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from EventBetterlogger');
    this.log = logger.logs[0];
  }
}
////////////////////////////////
export class NewLogger extends Logger {}
export class OldLogger {
  logs: string[] = [];
  log(message: string) {
    throw  new Error('Should not class the old logger!');
  }
}

@Component({
  selector: 'provider-6a',
  template: template,
  providers: [NewLogger,
    {provide: OldLogger, useClass: NewLogger}
  ]
})
export class Provider6aComponent {
  log: string;
  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if (newLogger === oldLogger) {
      throw  new Error('expected the two loggers to be different instances');
    }
    oldLogger.log('Hello OldLogger (but we want NewLogger)');

    this.log = newLogger.logs[0] || oldLogger.logs[0];
  }
}

@Component({
  selector: 'provider-6b',
  template: template,
  providers: [
    NewLogger,
    {provide: OldLogger, useExisting: NewLogger}
  ]
})
export  class Provider6bComponet {
  log: string;
  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if (newLogger !== oldLogger) {
      throw new Error('expected the two loggers to be the same intance');
    }
    oldLogger.log('Hello from NewLogger (via aliased OldLogger)');
    this.log = newLogger.logs[0];
  }
}
///////////////////////////////
export  let silentLogger = {
  logs: ['Silent logger says "Shhhh!".Provided via "useValue"'],
  log: () => {}
};
@Component({
  selector: 'provider-7',
  template: template,
  providers: [{provide: Logger, useValue: silentLogger}]
})
export class Provider7Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provide with useValue');
    this.log = logger.logs[0];
  }
}
/////////////////////////////
@Component({
  selector: 'provider-8',
  template: template,
  providers: [heroServiceProvider, Logger, UserService]
})
export class Provider8Component {
  log = 'Hello service injected successfully via heroServiceProvider';
  constructor(heroSerice: HeroService) {}
}
//////////////////////////

@Component({
  selector: 'provider-9',
  template: template,
  providers:[{provide: APP_CONFIG, useValue: HERO_DI_CONFIG}]
})
export class Provider9Component implements OnInit {
  log: string;
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}
  ngOnInit() {
    this.log = 'APP_CONFIG Application title is ' + this.config.title;
  }
}
/////////////////
let some_message = 'Hello from injected logger';
@Component({
  selector: 'provider-10',
  template: template,
  providers: [{provide: Logger, useValue: null}]
})
export class Provider10Component  implements  OnInit {
  log: string;
  constructor(@Optional() private logger: Logger) {
    if (this.logger) {
      this.logger.log(some_message);
    }
  }

  ngOnInit() {
    this.log =  this.logger ? this.logger.logs[0] : 'Optional logger was not available';
  }

}
@Component({
  selector: 'app-providers',
  template: `
    <h2>Provider variations</h2>
    <div id="p1"><provider-1></provider-1></div>
    <div id="p2"><provider-2></provider-2></div>
    <div id="p3"><provider-3></provider-3></div>
    <div id="p4"><provider-4></provider-4></div>
    <div id="p6a"><provider-6a></provider-6a></div>
    <div id="p6b"><provider-6b></provider-6b></div>
    <div id="p7"><provider-7></provider-7></div>
    <div id="p8"><provider-8></provider-8></div>
    <div id="p9"><provider-9></provider-9></div>
    <div id="p10"><provider-10></provider-10></div>
  `
})

export class ProvidersComponent {}
