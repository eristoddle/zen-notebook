//http://plnkr.co/edit/RvcCyZnRLc1lGh496WlK?p=preview
import {Input, Output, Directive, ElementRef, Renderer, EventEmitter, OnInit} from '@angular/core'

@Directive({
    selector: '[contenteditable]',
    host: {
        '(input)': 'update($event)'
    }
})
export class contentEditableDirective implements OnInit {
    @Input() myProperty;
    @Output() myPropertyChange: EventEmitter<any> = new EventEmitter();
    constructor(private el: ElementRef, private renderer: Renderer) { }

    update(event) {
        this.myPropertyChange.emit(this.el.nativeElement.innerText);
    }
    ngOnInit() {
        this.el.nativeElement.innerText = this.myProperty;
    }
}
