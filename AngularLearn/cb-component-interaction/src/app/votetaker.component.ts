
import {Component} from "@angular/core";

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>Should manking colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree:{{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters " [name]="voter" (onVoted)="onVoted($event)"></app-voter>
  `
})
export  class VotetakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['cui', 'deng', 'jun'];

  onVoted(agreed: boolean){
    agreed ? this.agreed++ : this.disagreed ++;
  }
}
