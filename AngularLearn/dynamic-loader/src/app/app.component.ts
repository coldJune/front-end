import {Component, OnInit} from '@angular/core';
import {AdItem} from "./ad-item";
import {AdService} from "./ad.service";

@Component({
  selector: 'app-root',
  template: `<div>
    <add-banner [ads]="ads"></add-banner>
  </div>`,
  providers: [AdService]
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  constructor(private adService: AdService) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
