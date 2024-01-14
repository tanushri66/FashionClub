import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(_value: any, ..._args: any[]): any {
    let filterData = [];
    let searchText = _args[0];
    searchText = searchText.toLowerCase();
    filterData = _value.filter((_el: any) => _el.productName.toLowerCase().includes(searchText));
    console.log("filter Data ", filterData.length);
    return filterData;

  }

}
