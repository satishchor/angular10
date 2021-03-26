import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { LanguageService } from 'src/app/core/services/language.service';

@Component({
    selector: 'app-topper',
    templateUrl: './topper.component.html',
    styleUrls: ['./topper.component.scss']
})

export class TopperComponent implements OnInit {

    element: any;
    fileToUpload: File = null;

    constructor(@Inject(DOCUMENT) private document: any, public languageService: LanguageService
        , private http: HttpClient) {

    }
    ngOnInit(): void {
        this.element = document.documentElement;
        this.languageService.setLanguage('en');
    }


    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (
            !document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            } else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            } else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            } else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        } else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            } else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            } else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            } else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }

    
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        console.log('file data : '+ this.fileToUpload.arrayBuffer());
        console.log(this.fileToUpload.arrayBuffer());

        this.addUser('satish_c', this.fileToUpload);
        console.log('data is posted.');
    }
    
    addUser(name: string, profileImage: File) {
        var formData: any = new FormData();
        formData.append("name", name);
        formData.append("avatar", profileImage);
        console.log('form data :');
        console.log(formData);

        this.http.get('http://192.168.0.107:8003/api/default/testapi').toPromise().then(data=>console.log(data));

        this.http.post('http://192.168.0.107:8003/api/default/pushfile', formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(
            catchError(this.errorMgmt)
        ).toPromise().then(aa=> console.log(aa));
        
    }

    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }

}


