import { Component } from '@angular/core';
import { contentEditableDirective } from '../../components/contenteditable/contenteditable';
import { ZenHeader } from '../../components/zen-header/zen-header';
import { NotebookService } from './providers/notebookService';

@Component({
    selector: 'notebook',
    templateUrl: 'notebook.html',
    providers: [NotebookService]
})
export class Notebook {
    public editorContent: string;

    constructor(private notebookService: NotebookService) {
        this.editorContent = '';
        console.log('notebook component', notebookService);
    }
}
