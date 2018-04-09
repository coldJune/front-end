import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";

export class Villains {id: number; name: string; }
@Injectable()
export class VillainsService {
  villains: Villains[] = [
    {id: 1, name: 'Dr.deng'},
    {id: 2, name: 'Moriarty'}
  ];

  getVillains() {
    return of(this.villains);
  }
}
