import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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

@NgModule({
    declarations: [CyclingComponent, HikingComponent, NgCycleComponent, ViewChildComponent, ViewChild2Component,
        TimerComponent, LocationViewComponent, ChildViewComponent, RunningComponent],
    imports: [
        CommonModule,
        LandRouterModule,
        FormsModule
    ],
    exports: [CyclingComponent]
})
export class LandModule {
    constructor() {

    }
}

