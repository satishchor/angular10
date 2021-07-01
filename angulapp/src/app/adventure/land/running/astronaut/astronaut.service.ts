import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MissionControlService {
    
    private missionAnnounceSource = new Subject<string>();
    private missionConfirmSource = new Subject<string>();

    //observable string streams
    missionAnnounced$ = this.missionAnnounceSource.asObservable();
    missionConfirmed$ = this.missionConfirmSource.asObservable();

    //service message commands
    announceMission(mission: string){
        debugger;
        this.missionAnnounceSource.next(mission);
    }
    confirmMission(astronaut: string){
        debugger;
        this.missionConfirmSource.next(astronaut);
    }
}