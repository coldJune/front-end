
import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {CountdownTimerComponent} from "./countdown-timer.component";

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <!--<h3>Countdown to Liftoff(via local variable)</h3>-->
    <!--<button (click)="timer.start()">Start</button>-->
    <!--<button (click)="timer.stop()">Stop</button>-->
    <!--<div>{{timer.seconds}}</div>-->
    <!--<app-countdown-timer #timer></app-countdown-timer>-->
    <h3>Countdown to Liftoff(via local variable)</h3>
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div>{{seconds()}}</div>
    <app-countdown-timer ></app-countdown-timer>
  `
})
export class CountdownLocalVarParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {this.timerComponent.start(); }
  stop() {this.timerComponent.stop(); }
}

