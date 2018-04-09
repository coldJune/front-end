import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeroListComponent} from "./hero-list.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroComponent} from "./hero.component";
import {HeroService} from "./hero.service";
import {SharedModule} from "../shared/shared.module";
import {HeroRoutingModule} from "./hero-routing.module";

@NgModule({
  imports: [SharedModule, HeroRoutingModule],
  declarations: [HeroListComponent, HeroDetailComponent, HeroComponent],
  providers: [HeroService]
})
export class HeroModule {}
