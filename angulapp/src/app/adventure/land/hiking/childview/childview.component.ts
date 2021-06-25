import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChange, ViewChild } from "@angular/core";
import { Observable, observable, Observer } from "rxjs";
import { map } from "rxjs/operators";
import { interval, fromEvent } from "rxjs";

@Component({
    selector: 'location-child-view',
    template: `<p>{{message}}</p>
    <button (click)="doObserverOperation()">Check Observable</button>
    <p id="el_id">It is been T-{{currSecond}} second from subsribing.</p>
    <div>Time : {{ time | async }} </div>`,
})
export class ChildViewComponent implements OnDestroy {

    constructor() {

    }

    time = new Observable<String>(observer =>{
        setInterval(()=>observer.next(new Date().toString()), 1000);
    })

    intervalId = 0;
    seconds = 10;
    message = '';
    currSecond = 0;

    ngOnDestroy() {
        this.clearTimer();
    }

    public Timerstart() {
        this.countDown();
    }

    public Timerstop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds.`;
    }

    private clearTimer() {
        clearInterval(this.intervalId);
    }

    private countDown() {
        console.log('Timer is started...');
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds < 0) {
                this.seconds = 10; //reset..
            }
            this.message = `T-${this.seconds} second and counting`
        }, 1000)

    }

    findValue(value: number) {
        console.log(`finded value ${value}`);
    }

    sequenceSubscriber(observer: Observer<number>) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        this.findValue(4);
        observer.complete();
    }

    doObserverOperation() {
        const sequence = new Observable(this.sequenceSubscriber);
        sequence.subscribe({
            next(num) { console.log(num); },
            complete() { console.log('operation is completed.') },
            error(err) { console.log(err) }
        })

        var timeObserver = interval(1000);
        timeObserver.subscribe(
            data => {
                this.currSecond = data;
                console.log(data);
            }
        )

        const el = document.getElementsByTagName('div');
        const mouseMove = fromEvent<MouseEvent>(el,'mousemove');
        const subscription = mouseMove.subscribe(evt=>{
            console.log(`Coords: ${evt.clientX} ${evt.clientY}`);

        })
    }
}
