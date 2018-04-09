
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Hero, heroes} from "./data-model";
import 'rxjs/add/operator/delay';
import {Injectable} from "@angular/core";
@Injectable()
export class HeroService {
  delayMs = 500;
  getHeroes(): Observable<Hero[]> {
    return of(heroes).delay(this.delayMs);
  }

  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero);
    return of(newHero).delay(this.delayMs);
  }
}
