import {Component, HostBinding, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Hero, HeroService} from "./hero.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {slideInDownAnimation} from "../animations";

@Component({
  template: `
    <h2>HEROES</h2>
    <div *ngIf="hero$ | async as hero">
      <h3>"{{hero.name}}"</h3>
      <div>
        <label>Id:</label>{{hero.id}}
      </div>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <p>
        <button (click)="gotoHeroes(hero)">Back</button>
      </p>
    </div>
  `,
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap.
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')));
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }
}
