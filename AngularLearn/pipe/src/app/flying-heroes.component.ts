
import {HEROES} from "./heroes";
import {Component} from "@angular/core";
@Component({
  selector: 'app-flygin-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class FlyingHeroesComponent {
  heroes: any[] = [];
  canfly = true;
  mutate = true;
  title = 'Flying Heroes(pure pipe)';

  constructor() {this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }

    let hero = {name, canFly: this.canfly};
    if (this.mutate) {
      this.heroes.push(hero);
    } else {
      this.heroes.concat(hero);
    }
  }
  reset() {
    this.heroes = HEROES.slice();
  }
}
//////////////////
@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export  class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Hero (impure pipe)';
}
