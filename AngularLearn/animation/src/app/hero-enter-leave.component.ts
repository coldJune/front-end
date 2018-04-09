import {Component, Input} from "@angular/core";
import {Hero} from "./hero.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-hero-list-enter-leave-states',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
        [@flyInOut]="'in'">{{hero.name}}</li>
    </ul>
  `,
  styleUrls: ['./hero-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HeroEnterLeaveComponent {
  @Input() heroes: Hero[];
}
