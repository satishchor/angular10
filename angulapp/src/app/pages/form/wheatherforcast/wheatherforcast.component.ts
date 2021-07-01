import { Component, OnInit } from "@angular/core";
import { SelectMultipleControlValueAccessor } from "@angular/forms";
import bsCustomFileInput from "bs-custom-file-input";
import { delay } from "rxjs/operators";

import { PagesService } from "../../../services/pages.service";

@Component({
  selector: 'app-wheatherforcast',
  templateUrl: './wheatherforcast.component.html'
})

export class WheatherForcastComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  persons: any;
  loadComplete: boolean = false;

  constructor(private pageservice: PagesService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Wheather Forcast', active: true }];
    bsCustomFileInput.init();
    this.GetWheatherList();
  }

  async GetWheatherList() {
    this.loadComplete = true;
    await new Promise(resolve => setTimeout(resolve, 5000));

    await this.pageservice.getPersons().
      then(aa => { this.persons = aa.Table });
    console.log(this.persons);
    this.loadComplete = false;
  }
}