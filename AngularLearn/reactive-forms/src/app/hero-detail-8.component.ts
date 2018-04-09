import {Component, Input, OnChanges} from "@angular/core";
import {Address, Hero, states} from "./data-model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-detail-8',
  templateUrl: './hero-detail-8.component.html'
})
export class HeroDetail8Component implements OnChanges{
  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }
  logNameChange() {}

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }
  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArrary = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs',addressFormArrary);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }
}
