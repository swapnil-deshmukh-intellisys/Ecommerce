import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterText: string): any[] {
    if (!value || !filterText) {
      return value;
    }
    
    return value.filter(item => {
      // Simple filter implementation
      return JSON.stringify(item).toLowerCase().includes(filterText.toLowerCase());
    });
  }
}
