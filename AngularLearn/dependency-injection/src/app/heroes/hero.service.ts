import {Injectable} from "@angular/core";
import {Logger} from "../logger.service";
import {HEROES} from "./mock-heroes";

@Injectable()
export  class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean
  ) {}

  getHeroes() {
    let auth = this.isAuthorized ? 'authorized' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
