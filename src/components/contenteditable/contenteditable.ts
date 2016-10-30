import {Input, Output, Directive, ElementRef, Renderer, EventEmitter, OnInit} from '@angular/core';

import { ContentService } from '../../providers/content-service';

@Directive({
    selector: '[contenteditable]',
    host: {
        '(input)': 'update($event)'
    }
})
export class contentEditableDirective implements OnInit {
    private currentContent: string;

    @Input() myProperty;
    @Output() myPropertyChange: EventEmitter<any> = new EventEmitter();

    constructor(private el: ElementRef, private renderer: Renderer, private contentService: ContentService) { }

    update(event) {
        this.currentContent = this.el.nativeElement.innerText;
        this.myPropertyChange.emit(this.currentContent);
    }

    ngOnInit() {
        this.el.nativeElement.innerText = this.myProperty;
        this.currentContent = this.myProperty;

        this.contentService.liveContent.subscribe(data => {
            this.currentContent = data;
            this.el.nativeElement.innerText = data;
        });
    }
}
