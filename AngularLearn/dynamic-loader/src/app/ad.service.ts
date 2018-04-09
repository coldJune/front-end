import {Injectable} from "@angular/core";
import {AdItem} from "./ad-item";
import {HeroProfileComponent} from "./hero-profile.component";
import {HeroJobAdComponent} from "./hero-job-ad.component";

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, { name: 'Bombasto', nio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as teacher'}),
      new AdItem(HeroJobAdComponent, {headline: 'Hiring for several position', body: 'Submit your resume today!'}),
      new AdItem(HeroJobAdComponent, {headline: 'Opentings in all departments', body: 'Apply today'}),
    ];
  }
}
