import {Component} from '@angular/core';
import {contentEditableDirective} from '../../components/contenteditable/contenteditable';

@Component({
    templateUrl: 'build/pages/notebook/notebook.html',
    directives: [contentEditableDirective],
    providers: []
})
export class Notebook {
    public editorContent: string;

    constructor() {
        this.editorContent = '';
    }
}
