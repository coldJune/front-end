
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from './hero';
@Component ({
  selector: 'hero-detail',
  template: `
    <div>
      <img src="{{heroImageUrl}}">
    </div>
  `,
})
export class HeroDetailComponent {
  @Input() prefix: string;
  @Input() hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();
  heroImageUrl = '';
}
