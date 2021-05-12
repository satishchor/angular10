import { Component, OnInit } from "@angular/core";
import bsCustomFileInput from "bs-custom-file-input";

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})

export class ValidationComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }
 
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Elements', active: true }];
    bsCustomFileInput.init();
  }
}