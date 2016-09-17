import { Directive } from '@angular/core';

/*
  Generated class for the ChangeDate directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[change-date]' // Attribute selector
})
export class ChangeDate {
  constructor() {
    console.log('Hello World');
  }
}
