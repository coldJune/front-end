import { Component } from '@angular/core';
import {Hero, heros} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = heros;
  hero = this.heroes[0];
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
}
