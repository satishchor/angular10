import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CyclingComponent } from "./cycling/cycling.component";
import { HikingComponent } from "./hiking/hiking.component";
import { NgCycleComponent } from "./cycling/ngcycle/ngcycle.component";
import { ViewChildComponent } from "./cycling/viewchild/viewchild.component";
import { RunningComponent } from "./running/running.component";

const routes: Routes = [
    {
        path: 'cycling',
        component: CyclingComponent,
        children:[
            {
                path: 'ngcycle', component: NgCycleComponent
            },
            {
                path: 'ngchildview', component: ViewChildComponent 
            }
        ]
    },
    {
        path: 'hiking',
        component: HikingComponent
    },
    { 
        path: 'running',
        component: RunningComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandRouterModule {
    constructor() {
        
    }
}
