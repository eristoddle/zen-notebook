import { Directive } from '@angular/core';

/*
  Generated class for the Calendar directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[calendar]' // Attribute selector
})
export class Calendar {
  constructor() {
    console.log('Hello World');
  }
}
