import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainBodyComponent } from "./my-store/mainbody.component";

const routes: Routes = [
    {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(aa => aa.FormModule)
    },
    {
        path:'mystore',
        component: MainBodyComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {
}