import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TranslateModule } from '@ngx-translate/core';

import { TopperComponent } from './topper/topper.component';

@NgModule({
    declarations : [TopperComponent],
    imports: [ 
        CommonModule,
        TranslateModule
    ],
    exports : [TopperComponent]
})

export class SharedModule {
    
}