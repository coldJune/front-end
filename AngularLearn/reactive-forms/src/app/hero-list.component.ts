import {Observable} from "rxjs/Observable";
import {Hero} from "./data-model";
import {HeroService} from "./hero.service";
import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit{
  heroes: Observable<Hero[]>;
  isLoading =  false;
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
  }

  getHeroes()  {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes().
                  finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }
}
