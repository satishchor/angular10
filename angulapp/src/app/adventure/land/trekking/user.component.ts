import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Technology } from "./technology";
import { Profile, Certificate } from "./profile.model";
import { User } from "./user";

import { UserService } from "./user.service";
import { error } from "@angular/compiler/src/util";

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
    certificates: Array<Certificate> = []
    dropdownSettings: {};

    dropDownList = [
        { id: 1, itemName: "India" },
        { id: 2, itemName: "China" },
        { id: 3, itemName: "Pakistan" },
    ];

    selectedList = [];


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
        // this.setDefaultValues();
        console.log(Math.pow(2, 7));

        // this.certificates.push(new Certificate("04","Microservice"));
        this.certificates.push({ crID: "01", crName: "microservice" });
        let topServices = this.certificates.filter(function (value) {
            return value.crID == "01"
        })

        topServices.forEach(function (value, index1, array) {
            console.log(`main element: ${value.crName}`)
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                console.log(element.crName);
            }
        });

        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };

        this.userService.getPersonList().subscribe(data => {
            console.log(data), error => { console.log(error) }
        });
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

    onUserFormSubmitted() {
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
        console.log(Math.pow(2, 7))
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