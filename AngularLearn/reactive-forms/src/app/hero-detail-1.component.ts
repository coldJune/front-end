import {Component} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-hero-detail-1',
  templateUrl: './hero-detail-1.component.html'
})
export class HeroDetail1Component {
  name = new FormControl();
}
