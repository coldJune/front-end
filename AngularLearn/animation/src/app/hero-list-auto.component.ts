import {Component, Input} from "@angular/core";
import {Hero} from "./hero.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-hero-list-auto',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@shrinkOut]="'in'">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./hero-list.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250,style({height: 0}))
      ])
    ])
  ]
})
export class HeroListAutoComponent {
  @Input() heroes: Hero[];
}
