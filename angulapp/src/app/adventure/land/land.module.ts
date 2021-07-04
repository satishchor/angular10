import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";

import { UiModule } from "../../shared/ui/ui.module";
import { LandRouterModule } from "./land-routing.module";
import { CyclingComponent } from "./cycling/cycling.component";
import { HikingComponent } from "./hiking/hiking.component";
import { NgCycleComponent } from "./cycling/ngcycle/ngcycle.component";
import { ViewChildComponent } from "./cycling/viewchild/viewchild.component";
import { ViewChild2Component } from "./cycling/viewchild2/viewchild2.component";
import { TimerComponent } from "./cycling/timer/timer.component";
import { LocationViewComponent } from "./hiking/locationview/locationview.component";
import { ChildViewComponent } from "./hiking/childview/childview.component";
import { RunningComponent } from "./running/running.component";
import { AstronautComponent } from "./running/astronaut/astronaut.component";
import { ShortNamePipe } from "./hiking/shortname.pipe";
import { ProfilePipe } from "./trekking/topcertificate.pipe";
import { HillComponent } from "./trekking/hill.component";
import { UserComponent } from "./trekking/user.component";

@NgModule({
    declarations: [CyclingComponent, HikingComponent, NgCycleComponent, ViewChildComponent, ViewChild2Component,
        TimerComponent, LocationViewComponent, ChildViewComponent, RunningComponent, AstronautComponent, ShortNamePipe,
        HillComponent, UserComponent, ProfilePipe],
    imports: [
        CommonModule,
        LandRouterModule,
        FormsModule,
        ReactiveFormsModule,
        UiModule,
        AngularMultiSelectModule
    ],
    exports: [CyclingComponent]
})
export class LandModule {
    constructor() {

    }
}

