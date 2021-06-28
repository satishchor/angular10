import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { fromEvent, Observable } from "rxjs";
import { bufferCount, bufferWhen } from "rxjs/operators";
import { ChildViewComponent } from "./childview/childview.component";

@Component({
    selector: 'hike-app',
    templateUrl: './hiking.component.html',
})
export class HikingComponent implements OnInit {

    public locationname: string = "Himachal";
    public location_image_path: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    major = 1;
    minor = 23;
    agreed = 0;
    disagreed = 0;
    @ViewChild("timer2")
    private timer: ChildViewComponent;
    logs: Array<string> = [];
    hero: string = "satish the hero";

    public heroes: Heroes[] = [
        {
            id: 1,
            name: "cap america"
        },
        {
            id: 2,
            name: "iron man"
        }
    ];

    constructor() {

    }

    public start() {
        this.timer.Timerstart();
    }

    public stop() {
        this.timer.Timerstop();
    }

    ngOnInit() {
        console.log(this.heroes);

        let source$ = new Observable(observer => {
            this.logs.push("observer 1");
            observer.next("next value");
            observer.next("next value 2");
            setTimeout(timeout => {
                observer.next("added new log..");
                observer.complete();
            }, 5000);
        });

        source$.subscribe(
            x => this.logger(x),
            error => this.logger(error),
            () => this.logger(">>> final complete.")
        );

        source$.toPromise().then(aa => {
            console.log(aa);
        })

        source$.subscribe(
            d => console.log(d),
            error => console.log(error),
            () => console.log("void method")
        );


    }

    private logger(message: any) {
        this.logs.push(message)
    }




    newMinor() {
        this.minor++;
    }

    newMajor() {
        this.major++;
        this.minor = 0;
    }

    vote(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}

class Heroes {
    id: number;
    name: string;
}