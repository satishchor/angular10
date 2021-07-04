import { Injectable } from "@angular/core";
import {
    HttpClient, HttpInterceptor, HttpErrorResponse,
    HttpRequest, HttpHeaders, HttpParams, HttpClientModule,
    HttpHandler, HttpProgressEvent, HttpUploadProgressEvent,
    HttpResponse
} from "@angular/common/http";
import * as all from "@angular/common/http"

import { Profile } from "./profile.model";
import { Technology } from "./technology";
import { User } from "./user";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {
    constructor(private clientReq: all.HttpClient) {

    }

    getProfiles(): Profile[] {
        var profiles = [
            new Profile("01", "TSE"),
            new Profile("02", "SE"),
            new Profile("03", "SSE")
        ]
        return profiles;
    }

    getTechnologies(): Technology[] {
        var technologies = [
            new Technology("0A", "Dot.NET"),
            new Technology("0B", "JAVA"),
            new Technology("0C", "NodeJs")
        ]
        return technologies;
    }

    createUser(user: any) {
        console.log(`User name is ${user.userName}`);
        console.log(user);
        console.log(`Profile Id: {${user.profile.prID}, Name: ${user.profile.prName}}`);
        for (let index = 0; index < user.technology.length; index++) {
            console.log(`Tech ID: {${user.technology[index].techID}, Tech Name: {${user.technology[index].techName}}}`)
        }
    }

    getPersonList(): Observable<HttpResponse<any>> {
        
        let tech = new Technology("", "");
        return this.clientReq.get<any>("https://reqbin.com/echo",{observe: 'response'});
    }

}