import {Pipe, PipeTransform} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null;
  private cacheUrl = '';

  constructor(private http: Http) {}
  transform(url: string): any {
    if (url !== this.cacheUrl) {
      this.cachedData = null;
      this.cacheUrl = url;
      this.http.get(url)
        .map(result => result.json())
        .subscribe(result => this.cachedData = result);
    }
    return this.cachedData;
  }
}
