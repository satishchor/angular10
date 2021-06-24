import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandModule } from "./land/land.module";
import { LandComponent } from "./land/land.component";
import { AdventureRouterModule } from "./adventure-routing.module";
import { UiModule } from "../shared/ui/ui.module";

@NgModule({
    declarations: [LandComponent],
    imports: [
        CommonModule,
        UiModule,
        LandModule,
        AdventureRouterModule
    ],
    exports: [LandComponent]
})
export class AdventureModule {
    constructor() {

    }
}