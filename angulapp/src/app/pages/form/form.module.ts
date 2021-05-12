import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ValidationComponent } from "./validation/validation.component";

import { UiModule } from "../../shared/ui/ui.module";
import { FormRouterModule } from "./form-routing.module";


@NgModule({
    declarations: [ ValidationComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormRouterModule,
        UiModule
    ]
})

export class FormModule {
}