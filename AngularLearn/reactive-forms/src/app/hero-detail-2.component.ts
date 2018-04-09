
import {FormControl, FormGroup} from "@angular/forms";
import {Component} from "@angular/core";

@Component({
  selector: 'app-hero-detail-2',
  templateUrl: './hero-detail-2.component.html'
})
export class HeroDetail2Component {
  heroForm = new FormGroup({
    name: new FormControl()
  });
}
