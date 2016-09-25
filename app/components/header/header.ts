import { Component } from '@angular/core';

/*
  Generated class for the Header component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header',
  templateUrl: 'build/components/header/header.html'
})
export class Header {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
