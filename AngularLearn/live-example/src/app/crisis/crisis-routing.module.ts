import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
const route: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list' , component: CrisisListComponent},
  {path: ':id', component: CrisisDetailComponent}
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {}
