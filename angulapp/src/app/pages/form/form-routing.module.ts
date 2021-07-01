import { RouterModule, Router, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ValidationComponent } from "./validation/validation.component";
import { WheatherForcastComponent } from "./wheatherforcast/wheatherforcast.component";

const routes: Routes = [
    {
        path: 'validation',
        component: ValidationComponent
    },
    {
        path: 'wheatherforcast',
        component: WheatherForcastComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRouterModule {
}