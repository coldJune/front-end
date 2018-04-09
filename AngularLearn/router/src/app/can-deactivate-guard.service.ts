import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";

export interface CanDeactivateGuardService {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateGuardService> {
  canDeactivate(component: CanDeactivateGuardService) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
