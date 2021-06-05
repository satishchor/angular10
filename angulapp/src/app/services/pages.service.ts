import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private values: Array<string> = [];
  private stringData = [];
  constructor(private http: HttpClient) { }

  GetWheatherForcastList() {
    let data: any;
    var arr = [];
    let request = this.http.get("https://localhost:5011/AdventureWorks/api/person/getpersonlist")
      .subscribe(data => {
        Object.keys(data).map(function (key) {

          arr.push({ [key]: data[key] });

          return arr;
        });

        this.stringData = arr[0].Table;
        this.stringData = [
          {
            "BusinessEntityID": 1,
            "PersonType": "EM",
            "NameStyle": false,
            "Title": null,
            "FirstName": "Ken",
            "MiddleName": "J",
            "LastName": "Sánchez",
            "Suffix": null,
            "EmailPromotion": 0,
            "AdditionalContactInfo": null,
            "Demographics": "<IndividualSurvey xmlns=\"http://schemas.microsoft.com/sqlserver/2004/07/adventure-works/IndividualSurvey\"><TotalPurchaseYTD>0<\/TotalPurchaseYTD><\/IndividualSurvey>",
            "rowguid": "92c4279f-1207-48a3-8448-4636514eb7e2",
            "ModifiedDate": "2009-01-07T00:00:00"
          }];
        console.log(this.stringData);
        return this.stringData;
      })

  }

  getPersons(): Promise<any> {
    return this.http.get("https://localhost:5011/AdventureWorks/api/person/getpersonlist").toPromise();
  }
}
