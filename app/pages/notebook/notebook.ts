import {Component} from '@angular/core';
import {contentEditableDirective} from '../../components/contenteditable/contenteditable';
import {ZenHeader} from '../../components/zen-header/zen-header';


@Component({
    templateUrl: 'build/pages/notebook/notebook.html',
    directives: [contentEditableDirective, ZenHeader],
    providers: []
})
export class Notebook {
    public editorContent: string;

    constructor() {
        this.editorContent = '';
    }
}
