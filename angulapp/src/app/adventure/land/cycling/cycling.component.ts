import { Component, OnInit, DoCheck, ViewChild, AfterViewInit } from "@angular/core";
import { ViewChildComponent } from "./viewchild/viewchild.component";
import { ViewChild2Component } from "./viewchild2/viewchild2.component";

@Component({
    selector: 'cycle-app',
    templateUrl: './cycling.component.html',
    styleUrls: ['./cycling.component.css']
})
export class CyclingComponent implements OnInit,DoCheck,AfterViewInit {
    
    // @ViewChild(ViewChildComponent) viewChild;
    // @ViewChild(ViewChild2Component) viewChild2;

    public name:string;
    public name2:string;
    public id:number;
    constructor() {
    }

    ngOnInit(){
        // this.name = "satish2";
        // this.id = 34;
        // this.viewChild2.visible = true;
    }

    ngDoCheck(){
    
    }

    ngAfterViewInit(){

    }


}