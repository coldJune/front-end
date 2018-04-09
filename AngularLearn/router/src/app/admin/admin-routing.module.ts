import {Router, RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {ManageCrisisComponent} from "./manage-crisis.component";
import {ManageHeroesComponent} from "./manage-heroes.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {NgModel} from "@angular/forms";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../auth-guard.service";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'crisis', component: ManageCrisisComponent},
          {path: 'heroes', component: ManageHeroesComponent},
          {path: '', component: AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
