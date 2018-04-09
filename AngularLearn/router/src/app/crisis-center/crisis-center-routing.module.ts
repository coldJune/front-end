import {RouterModule, Routes} from "@angular/router";
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";
import {NgModule} from "@angular/core";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailResolverService} from "./crisis-detail-resolver.service";
import {CanDeactivateGuard} from "../can-deactivate-guard.service";

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolverService
  ]
})
export class CrisisCenterRoutingModule {}
