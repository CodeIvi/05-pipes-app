import { Pipe, PipeTransform } from '@angular/core';
import { Creator} from '../interfaces/interfaces';

@Pipe({
    name: 'heroCreator'
})

export class HeroCreator implements PipeTransform {
    transform(value: Creator): string {
        return Creator[value]        
    }
}