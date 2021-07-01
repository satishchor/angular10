import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Technology } from "./technology";
import { Profile } from "./profile";
import { User } from "./user";

import { UserService } from "./user.service";

@Component({
    selector: 'user-app',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    // data members;
    isValidFormSubmitted: boolean;
    allProfiles: Profile[];
    allTechnologies: Technology[];
    userForm: FormGroup;


    constructor(private formBuilder: FormBuilder,
        private userService: UserService) {

    }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            profile: [null, [Validators.required]],
            userName: ['', [Validators.required]],
            technology: [null, [Validators.required]]
        });

        this.allProfiles = this.userService.getProfiles();
        this.allTechnologies = this.userService.getTechnologies();

        console.log(Math.pow(2,7));
    }

    get profile() {
        return this.userForm.get('profile');
    }

    get userName() {
        return this.userForm.get('userName');
    }

    get technology() {
        return this.userForm.get('technology');
    }

    onUserFormSubmitted(form: any, isvalid: boolean) {
        console.log(JSON.stringify(this.userForm.value) + `is valid ${this.userForm.valid} , is form dirty ${this.userForm.dirty}`);
        this.isValidFormSubmitted = false;
        if (this.userForm.valid) {
            this.isValidFormSubmitted = true;
        } else {
            return;
        }
        debugger;
        let newUser: User = this.userForm.value;

        this.userService.createUser(newUser);

    }

    resetForm(form: FormGroup) {
        form.reset();
    }

    setDefaultValues() {
        let user = new User();
        user.userName = "Satish Chorghe";
        user.profile = this.allProfiles[0];
        user.technologies = [
            this.allTechnologies[0]
        ]
        this.userForm.setValue(user);
    }

    onProfileChange() {
        let profile: Profile = this.profile.value;
        console.log(`Profile changed: ${profile.prName}`);
    }



}