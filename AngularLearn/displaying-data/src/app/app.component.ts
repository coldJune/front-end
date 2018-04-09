import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>heroes</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length>3">There are many heroes!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes= [
    new Hero(1, 'cui'),
    new Hero(2, 'deng'),
    new Hero(3, 'Bom'),
    new Hero(4, 'Tor')
  ];
  //
  constructor() {
    this.title = 'app';
    this.myHero = this.heroes[0];
  }
}
