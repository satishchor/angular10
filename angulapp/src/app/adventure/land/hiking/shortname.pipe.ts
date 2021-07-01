import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {
    constructor() {
        
    }

    transform(value: string, exponent: 1){
        return value.toString().substring(0,4).toUpperCase();
    }
}