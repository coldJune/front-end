import {Component, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export  class CountdownTimerComponent implements OnInit,OnDestroy {
  inervalId = 0;
  message = '';
  seconds = 11;

  clearTimer() {
    clearInterval(this.inervalId);
  }
  ngOnInit() {
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.inervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and couting`;
      }
    }, 1000);
  }
}
