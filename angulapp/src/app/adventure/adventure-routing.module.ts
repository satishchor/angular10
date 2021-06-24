import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CyclingComponent } from "./land/cycling/cycling.component";

import { LandComponent } from "./land/land.component";

const routes: Routes = [
    {
        path: 'land', component: LandComponent, loadChildren:()=>import('./land/land.module').then(a=>a.LandModule)
    },
    {
        path: 'land/cycling2', component: CyclingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdventureRouterModule {
    constructor() {
        
    }
}