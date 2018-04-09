import {Hero} from "./hero";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-happy-hero',
  template: `Wow. You like {{hero.name}}.What a happy hero ...just like me`
})
export class HappyHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'app-sad-hero',
  template: `You like {{hero.name}}? Such a sad hero.Are you sad too?`
})
export class SadHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'app-confused-hero',
  template: `Are you as confused as {{hero.name}}`
})
export class ConfusedHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: `app-unknown-hero`,
  template: `{{message}}`
})
export class UnkonwHeroComponent {
  @Input() hero: Hero;
  get message() {
    return this.hero && this.hero.name ?
      `${this.hero.name} is strange and mysterious.` :
      'Are you feeling indecisive';
  }
}

export const heroSwitchComponents = [
  HappyHeroComponent, SadHeroComponent, ConfusedHeroComponent, UnkonwHeroComponent
]