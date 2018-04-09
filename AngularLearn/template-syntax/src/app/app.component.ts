import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentHero = new Hero(1, 'deng', 'sad');
  heroImageUrl = '../favicon.ico';
  heros = [
    new Hero(1, 'cio', 'happy'),
    new Hero(2, 'ad', 'confuse'),
    new Hero(3, 'asd', 'new')
  ];
  canSave = false
  isUnchanged = true;
  isSpecial = false;
  fontSizePx = 10;
  currentClass: {};
  currentStyles: {};
  getValue(): number {
    return 2;
  }
  deleteHero(hero: Hero) {
    alert(`Delete ${hero ? hero.name : 'the Hero'}`);
  }
  onSave(event: KeyboardEvent) {
    let EvtMsg = event ? 'EventTarget class is ' + (<HTMLElement>event.target).className : '';
    if (EvtMsg) {
      event.stopPropagation();
    }
  }
  onSubmit() {
    /**/
  }

  setCurrentClass() {
    this.currentClass = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold' : 'normal',
      'font-size' : this.isSpecial ? '24px' : '12px'
    };
  }
  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }
  constructor() {
    this.setCurrentClass();
    this.setCurrentStyles();
  }
}
