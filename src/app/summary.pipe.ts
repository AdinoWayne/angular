import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, args?: any) {
        if(!value) {
            return null;
        }
        let limit = args ? args : 50;
        return value.substr(0, limit) + "...";
    }
}