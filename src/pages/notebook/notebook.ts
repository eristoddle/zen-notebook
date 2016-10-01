import {Component} from '@angular/core';
import {contentEditableDirective} from '../../components/contenteditable/contenteditable';
import {ZenHeader} from '../../components/zen-header/zen-header';


@Component({
    selector: 'notebook',
    templateUrl: 'notebook.html',
    directives: [contentEditableDirective, ZenHeader]
})
export class Notebook {
    public editorContent: string;

    constructor() {
        this.editorContent = '';
    }
}
