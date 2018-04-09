import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CrisisCenterRoutingModule} from "./crisis-center-routing.module";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisService} from "./crisis.service";
import {CrisisListComponent} from "./crisis-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
    CrisisDetailComponent,
    CrisisListComponent
  ],
  providers: [
    CrisisService
  ]
})
export  class CrisisCenterModule {}
