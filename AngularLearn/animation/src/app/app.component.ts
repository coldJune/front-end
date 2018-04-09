import { Component } from '@angular/core';
import {Hero, HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
  }
}
