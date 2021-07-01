import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UiModule } from "../shared/ui/ui.module";
import { FormModule } from "./form/form.module";

import { PagesRoutingModule } from "./pages-routing.module";

import { MainBodyComponent } from "./my-store/mainbody.component";

@NgModule({
    declarations: [ MainBodyComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        UiModule,
        FormModule,
        PagesRoutingModule
    ]
})

export class PagesModule {
}