
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component} from "@angular/core";

@Component({
  selector: 'app-hero-detail-3',
  templateUrl: './hero-detail-3.component.html'
})
export class HeroDetail3Component {
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
}
