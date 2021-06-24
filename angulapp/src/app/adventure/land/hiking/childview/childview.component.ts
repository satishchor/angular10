import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChange, ViewChild } from "@angular/core";

@Component({
    selector: 'location-child-view',
    template: '<p>{{message}}</p>',
})
export class ChildViewComponent implements OnDestroy {

    constructor() {

    }

    intervalId = 0;
    seconds = 10;
    message = '';

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
}
