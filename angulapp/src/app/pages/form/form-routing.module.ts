import { RouterModule, Router, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ValidationComponent } from "./validation/validation.component";

const routes: Routes = [
    {
        path: 'validation',
        component: ValidationComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRouterModule {
}