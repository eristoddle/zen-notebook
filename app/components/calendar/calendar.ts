import { Component } from '@angular/core';


@Component({
    selector: 'calendar',
    template: '<p>Testing: {{data}}</p>'
})
export class Calendar {
    public data: string = 'Hello world!';
    constructor() {};
}
