import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { observable, Observable } from "rxjs";
import { SnotifyService, SnotifyToastConfig } from "ng-snotify";

@Component({
    selector: 'hill-app',
    templateUrl: './hill.component.html',
    providers: [SnotifyService]
})
export class HillComponent implements OnInit {

    breadcrumbItems = [];
    title = "Hill Component";
    favoriteColorControl = new FormControl(''); //bootstrap validation form
    submit: boolean;

    validationForm: FormGroup;


    constructor(private formBuilder: FormBuilder, private notifiServ: SnotifyService) {

    }

    ngOnInit() {
        this.breadcrumbItems = [{ label: "Trekking" }, { active: true, label: "Hills" }]

        this.validationForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
            city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
        });

        this.submit = false;
    }

    validSubmit() {
        this.submit = true;
    }

    /**
     *  Returns form
     */
    get form() {
        return this.validationForm.controls;
    }

}