import { Profile } from "./profile";
import { Technology } from "./technology";

export class User {
    userName:String;
    profile:Profile = null;
    technologies:Technology[];
}