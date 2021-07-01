import { Component, Input, OnChanges, OnInit, SimpleChange } from "@angular/core";

@Component({
    selector: 'ng-cycle',
    templateUrl: './ngcycle.component.html'
})
export class NgCycleComponent implements OnInit, OnChanges {

    // public name1:string = "akshay";
    // public

    // public name2:string = "satish";

    @Input()
    name: string;

    @Input()
    id: number;

    constructor() {

    }

    ngOnInit() {

    }

    ngOnChages(){
        console.log('wring log;')
    }

    ngOnChanges(changes){
        console.log(changes);
        for (const propName in changes) {
            const chng = changes[propName];
            const cur  = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
          }
    }
}