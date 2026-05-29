import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/interfaces';

@Pipe({
    name: 'heroTextColor'
})

export class HeroTextColor implements PipeTransform {
    transform(value:Color): string {
        return ColorMap[value];
    }
}