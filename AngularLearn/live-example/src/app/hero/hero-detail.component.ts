import {Component, OnInit} from "@angular/core";
import {Hero, HeroService} from "./hero.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  template: `
    <h3 highlight>HeroDetail</h3>
    <div *ngIf="hero">
      <div>Id: {{hero.id}}</div>
      <label>Name
        <input [(ngModel)]="hero.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Hero List</a>
  `
})
export  class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
}
