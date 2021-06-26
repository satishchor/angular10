import { Component } from "@angular/core";
import { MissionControlService } from "./astronaut/astronaut.service";

@Component({
    selector: 'running-app',
    templateUrl: './running.component.html',
    providers: [MissionControlService]
})
export class RunningComponent {

    astronauts = ['Satish', 'Akshay', 'Komal'];
    missions = ['Fly to Moon', 'Fly to Mars', 'Fly to Ear'];
    nextMission = 0;
    history:string[] = [];

    constructor(private missionservice: MissionControlService) {
        missionservice.missionConfirmed$.subscribe(
            astronaut => {
                this.history.push(`${astronaut} confirmed the mission.`)
            }
        )
    }

    announceMission() {
        const mission = this.missions[this.nextMission++];
        this.missionservice.announceMission(mission);

        this.history.push(`Mission "${mission} announced`);
        if(this.nextMission >= this.missions.length){
            this.nextMission = 0;
        }

    }
}