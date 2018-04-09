import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {states} from "./data-model";
import {Component} from "@angular/core";
@Component({
  selector: 'app-hero-detail-5',
  templateUrl: './hero-detail-5.component.html'
})
export class HeroDetail5Component {
  heroForm: FormGroup;
  states = states;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      power: '',
      sidekick: ''
    });
  }
}
