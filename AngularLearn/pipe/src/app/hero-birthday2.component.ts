
import {Component} from "@angular/core";

@Component({
  selector: 'app-hero-birthday2',
  template: `
    <p>The Hero's birthday is {{birthday | date: format}}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
  `
})

export class HeroBirthday2Component {
  birthday = new Date(1995, 11, 18);
  toggle = true;
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {this.toggle = !this.toggle; }
}
