import { Component } from '@angular/core';
import { contentEditableDirective } from '../../components/contenteditable/contenteditable';
import { ZenHeader } from '../../components/zen-header/zen-header';
import { NotebookService } from './providers/notebook-service';

@Component({
    selector: 'notebook',
    templateUrl: 'notebook-page.html',
    providers: [NotebookService]
})
export class NotebookPage {
    public editorContent: string;

    constructor(private notebookService: NotebookService) {
        this.editorContent = '';
        console.log('notebook-page component', notebookService);
    }
}
