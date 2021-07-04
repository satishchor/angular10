import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
import { Profile } from "./profile.model";

@Pipe(
    {
        name: 'topprofile'
    }
)
export class ProfilePipe implements PipeTransform {
    transform(profiles: Profile[]) {
        let newProfile = profiles.map(obj=> ({...obj, Active: 'false'}));
        
        console.log(profiles);
        // let newProfile = profiles.map(x => Object.assign({}, profiles, { "isgoodProfile": "Y" }));
        return profiles.filter(data => data.prID == "02")
    }
}