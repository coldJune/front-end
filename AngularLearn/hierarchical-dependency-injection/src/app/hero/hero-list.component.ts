import {Observable} from "rxjs/Observable";
import {Hero, HeroTaxReturn} from "./hero";
import {HeroesService} from "./heroes.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-heroes-list',
  template: `
    <div>
      <h3>Hero Tax Return</h3>
      <ul>
        <li *ngFor="let hero of heroes | async" (click)="showTaxReturn(hero)">{{hero.name}}
        </li>
      </ul>
      <app-hero-tax-return *ngFor="let selected of selectedTaxReturns; let i = index"
                           [taxReturn]="selected" (close)="closeTaxReturn(i)"></app-hero-tax-return>
    </div>
  `,
  styles: [ 'li {cursor: pointer;}' ]
})
export class HeroListComponent {
  heroes: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes();
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero).subscribe(htr => {
      if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
        this.selectedTaxReturns.push(htr);
      }
    });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }
}
