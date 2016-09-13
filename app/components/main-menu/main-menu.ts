import { Component } from '@angular/core';

/*
  Generated class for the MainMenu component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'main-menu',
  templateUrl: 'build/components/main-menu/main-menu.html'
})
export class MainMenu {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
