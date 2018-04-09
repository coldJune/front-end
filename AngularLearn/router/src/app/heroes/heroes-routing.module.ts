import {RouterModule, Routes} from "@angular/router";
import {HeroListComponent} from "./hero-list.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {NgModule} from "@angular/core";

const heroesRoutes: Routes = [
  {path: 'heroes', redirectTo: './superheroes'},
  {path: 'hero/:id', redirectTo: './superhero/:id'},
  {path: 'superheroes', component: HeroListComponent},
  {path: 'superheroes/:id', component: HeroDetailComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule {}
