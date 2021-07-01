import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable, timer } from "rxjs";
import { map } from "rxjs/operators";

@Component({
    selector: 'time',
    template: "{{ $time | async | date: 'hh:mm:ss a'}}",
    // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TimerComponent {
    constructor() {

    }

    public $time: Observable<Date> = timer(0, 100).pipe(map(() => new Date()));


    public date: Observable<Date> = timer(0, 100).pipe(map(() => new Date()));

}