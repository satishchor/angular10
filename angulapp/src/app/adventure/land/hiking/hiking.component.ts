import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChildViewComponent } from "./childview/childview.component";

@Component({
    selector: 'hike-app',
    templateUrl: './hiking.component.html'
})
export class HikingComponent implements OnInit {

    public locationname: string = "Himachal";
    public location_image_path: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    major = 1;
    minor = 23;
    agreed = 0;
    disagreed = 0;
    @ViewChild("timer2") 
    private timer : ChildViewComponent;

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

    public start(){
        this.timer.Timerstart();
    }

    public stop(){
        this.timer.Timerstop();
    }

    ngOnInit() {
        console.log(this.heroes);
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