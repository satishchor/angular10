import { Profile } from "./profile.model";
import { Technology } from "./technology";

export class User {
    userName:String;
    profile:Profile = null;
    technologies:Technology[];
}