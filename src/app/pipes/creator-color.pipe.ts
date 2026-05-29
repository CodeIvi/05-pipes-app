import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/interfaces';

@Pipe({
    name: 'colorCreator'
})

export class ColorCreatorPipe implements PipeTransform {
    transform(value:Creator): boolean {
       return value === Creator.Marvel;
    }
}