import {Injectable} from "@angular/core";
import {Hero, HeroTaxReturn} from "./hero";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Injectable()
export  class HeroesService {
  heroes: Hero[]  = [
    {id: 1, name: 'RubberMan', tid: '123123123'},
    {id: 2, name: 'Torno', tid: '456456456'}
  ];

  heroTaxReturn: HeroTaxReturn[] = [
    new HeroTaxReturn(10, this.heroes[0], 350000),
    new HeroTaxReturn(20, this.heroes[1], 1250000)
  ];

  getHeroes(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer: Observer<Hero[]>) => {
      observer.next(this.heroes);
      observer.complete();
    });
  }

  getTaxReturn(hero: Hero): Observable<HeroTaxReturn> {
    return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturn.find(t => t.hero.id === hero.id);
      observer.next(htr || new HeroTaxReturn(0, hero));
      observer.complete();
    });
  }

  saveTaxReturn(heroTaxReturn: HeroTaxReturn): Observable<HeroTaxReturn> {
    return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturn.find(t => t.id === heroTaxReturn.id);
      if (htr) {
        heroTaxReturn = Object.assign(htr, heroTaxReturn);
      }else{
        this.heroTaxReturn.push(heroTaxReturn);
      }
      observer.next(heroTaxReturn);
      observer.complete();
    });
  }
 }
