import { Component, OnInit } from "@angular/core";
import bsCustomFileInput from "bs-custom-file-input";

import { PagesService } from "../../../services/pages.service";

@Component({
  selector: 'app-wheatherforcast',
  templateUrl: './wheatherforcast.component.html'
})

export class WheatherForcastComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  persons: any;

  constructor(private pageservice: PagesService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Wheather Forcast', active: true }];
    bsCustomFileInput.init();
    this.GetWheatherList();
  }

  async GetWheatherList() {
    await this.pageservice.getPersons().
      then(aa => { this.persons = aa.Table });
    console.log(this.persons);
  }
}