import { Component, OnInit } from '@angular/core';
import { LAYOUT_VERTICAL, LAYOUT_HORIZONTAL } from './layout.model';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {


    constructor(){

    }

    // layout related config
    layoutType: string = '';

    ngOnInit() {
        // default setting
        this.layoutType = LAYOUT_VERTICAL;
        // this.addUser('satish')
    }

    isVerticalLayoutRequested() {
        return this.layoutType == LAYOUT_VERTICAL;
    }

    isHorizontalLayoutRequested() {
        return this.layoutType == LAYOUT_HORIZONTAL;
    }

}