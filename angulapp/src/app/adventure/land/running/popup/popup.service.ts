import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from "@angular/core";
import { NgElement, WithProperties } from "@angular/elements";
import { PopupComponent } from "./popup.component";

@Injectable()
export class PopupService {
    constructor(private injector: Injector,
        private applicationRef: ApplicationRef,
        private componentFactoryResover: ComponentFactoryResolver) {
    }

    // Previous dynamic-loading method required you to set up infrastructure
    // Before adding the popup to the DOM
        showAsComponent(message: string){
        //create element
        const popup = document.createElement('popup-component');

        // Create the component and wire it up with the element
        const factory = this.componentFactoryResover.resolveComponentFactory(PopupComponent);
        const popupComponentRef = factory.create(this.injector, [], popup);

        // Attach to the view so that the change detector knows to run
        this.applicationRef.attachView(popupComponentRef.hostView);

        // Listen to the close event
        popupComponentRef.instance.closed.subscribe(()=>)


    }
}