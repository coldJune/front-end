
import {Component} from "@angular/core";

@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe()">Click Me</button>{{clickMessage}}
  `
})
export class ClickMeCompoent {
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
