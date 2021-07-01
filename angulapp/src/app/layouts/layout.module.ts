import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './layout/shared/shared.module';

@NgModule({
    declarations: [HorizontalComponent, LayoutComponent, VerticalComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        HorizontalComponent, VerticalComponent
    ]
})

export class LayoutModule {

}