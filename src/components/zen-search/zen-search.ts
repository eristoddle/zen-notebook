import { Component } from '@angular/core';

/*
  Generated class for the ZenSearch component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'zen-search',
    templateUrl: 'zen-search.html'
})
export class ZenSearch {

    private query: string;

    constructor() {
    }

    getItems($event) {
        console.log('search', $event, $event.target.value);
        this.query = $event.target.value;
    }

}
