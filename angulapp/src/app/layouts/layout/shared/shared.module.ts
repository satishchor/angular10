import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ClickOutsideModule } from "ng-click-outside";
import { NgbDropdown, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";

import { LanguageService } from "../../../core/services/language.service";

import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RightsidebarComponent } from "./rightsidebar/rightsidebar.component";

@NgModule({
    declarations: [TopbarComponent, SidebarComponent, FooterComponent, RightsidebarComponent],
    imports: [
        CommonModule,
        TranslateModule,
        PerfectScrollbarModule,
        RouterModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        ClickOutsideModule
    ],
    exports: [TopbarComponent, SidebarComponent, FooterComponent, RightsidebarComponent],
    providers: [LanguageService]
})

export class SharedModule {

}