import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly' // EN HTML: 'fernando | toggleCase'
})

export class canFlyPipe implements PipeTransform {


    transform(canfly: boolean): string {
        return canfly ? "Puede volar": "No puede volar";
        
    }
}