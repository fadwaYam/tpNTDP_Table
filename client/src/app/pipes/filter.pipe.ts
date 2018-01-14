import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
// j'ai défini monsieur cette classe filter pour faire la recherche 
export class FilterPipe implements PipeTransform {

  transform(searchArray: any, search: any): any {
    console.log('my search ', search);
    if(search === undefined) return searchArray;
    return searchArray.filter(function(item){
      console.log(item.name);
      return item.name.includes(search);
    })
  }

}
