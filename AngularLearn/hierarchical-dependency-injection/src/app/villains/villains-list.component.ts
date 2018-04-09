
import {Observable} from "rxjs/Observable";
import {Villains, VillainsService} from "./villains.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  providers: [VillainsService]
})
export class VillainsListComponent {
  villains: Observable<Villains[]>;

  constructor(private villainsService: VillainsService) {
    this.villains = villainsService.getVillains();
  }
}
