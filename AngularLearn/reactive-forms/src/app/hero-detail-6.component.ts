
import {Component, Input} from "@angular/core";
import {Hero, states} from "./data-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-detail-6',
  templateUrl: './hero-detail-5.component.html'
})
export class HeroDetail6Component {
  @Input() hero: Hero;
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
        zip: '',
      }),
      power: '',
      sidekick: ''
    });
  }
}
