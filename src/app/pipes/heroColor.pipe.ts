import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/interfaces';


@Pipe({
    name: 'heroColor' // EN HTML: 'fernando | toggleCase'
})

export class heroColorPipe implements PipeTransform {


    transform(value: Color): string {
        return Color[value];

        
    }
}