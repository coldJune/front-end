import {Component, Input, OnChanges} from "@angular/core";
import {Address, Hero, states} from "./data-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-detail-7',
  templateUrl: './hero-detail-5.component.html'
})
export class HeroDetail7Component implements OnChanges {
  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.heroForm.reset();
    this.heroForm.setValue({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address(),
      power: '',
      sidekick: ''
    });
  }
}
