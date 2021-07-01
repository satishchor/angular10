import { Component, Input, OnDestroy } from "@angular/core";
import { MissionControlService } from "./astronaut.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'astronaut-app',
    templateUrl: './astronaut.component.html'
})
export class AstronautComponent implements OnDestroy {

    @Input()
    name: string = '';
    mission: String = '<No mission announced>'
    confirm: boolean = false;
    announce: boolean = false;
    subscription: Subscription;

    constructor(private missionservice: MissionControlService) {
        this.subscription = this.missionservice.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.confirm = false;
                this.announce = true;
            }
        )
    }

    confirmmission() {
        debugger;
        this.confirm = true;
        this.missionservice.confirmMission(this.name);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}