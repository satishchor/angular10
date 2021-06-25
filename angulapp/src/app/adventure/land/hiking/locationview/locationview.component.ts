import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChange, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: 'location-view',
    templateUrl: './locationview.component.html'
})
export class LocationViewComponent {

    @Input() location_name;
    @Input() image_location;

    private _country_name: string = '';

    @Input()
    get country_name(): string { return this._country_name; }
    set country_name(name: string) {
        this._country_name = (name && name.trim()) || '<no name set>';
    }

    @Input() major = 0;
    @Input() minor = 0;
    changeLog: string[] = [];

    @Output()
    voted = new EventEmitter<Boolean>();
    didvote: boolean = false;

    constructor() {

    }

    ngOnChanges(changes: SimpleChange) {
        console.log(changes);
        const log: string[] = [];
        for (const propName in changes) {
            console.log(propName);
            const changedProp = changes[propName];
            const to = JSON.stringify(changedProp.currentValue);
            if (!changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`)
            }
        }
        this.changeLog.push(log.join(', '));
    }

    vote(agreed: boolean) {
        this.voted.emit(agreed);
        this.didvote = true;
    }



}