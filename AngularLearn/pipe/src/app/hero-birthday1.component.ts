import {Component} from "@angular/core";

@Component({
  selector: 'app-hero-birthday',
  template: `<p>The Hero's birthday is {{birthday | date}}</p>`
})
export class HeroBirthday1Component {
  birthday = new Date(1995, 11, 18);
}
