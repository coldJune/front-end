import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export  class DialogService {
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'It is Ok');
    return Observable.of(confirmation);
  }
}
