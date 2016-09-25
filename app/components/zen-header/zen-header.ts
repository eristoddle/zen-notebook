import { Component } from '@angular/core';


@Component({
  selector: 'zen-header',
  templateUrl: 'build/components/zen-header/zen-header.html'
})
export class ZenHeader {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
