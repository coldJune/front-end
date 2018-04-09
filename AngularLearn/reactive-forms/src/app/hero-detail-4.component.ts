import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {states} from "./data-model";
import {Component} from "@angular/core";
@Component({
  selector: 'app-hero-detail-4',
  templateUrl: './hero-detail-4.component.html'
})
export class HeroDetail4Component {
  heroForm: FormGroup;
  states= states;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}
