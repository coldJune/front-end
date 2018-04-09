import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./not-found.component";
import {NgModule} from "@angular/core";
import {ComposeMessageComponent} from "./compose-message.component";
import {CanDeactivateGuard} from "./can-deactivate-guard.service";
import {AuthGuard} from "./auth-guard.service";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

const appRouters: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: {preload: true}
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRouters,
      {
        enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})

export class AppRoutingModule {}
