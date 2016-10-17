import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { contentEditableDirective } from '../../components/contenteditable/contenteditable';
import { ZenHeader } from '../../components/zen-header/zen-header';
import { NotebookService } from './providers/notebook-service';
import { StorageService } from '../../providers/storage-service';
import { CalendarService } from '../../components/zen-datepicker/calendar-service';
import { ContentService } from '../../providers/content-service';

@Component({
    selector: 'notebook',
    templateUrl: 'notebook-page.html'
})
export class NotebookPage implements OnDestroy, OnInit {
    editorContent: string;
    currentPath: string;
    subscription: Subscription;

    constructor(private notebookService: NotebookService, private calendarService: CalendarService, private contentService: ContentService) {
        this.contentService.delimiter = '-';
        this.editorContent = '';
        console.log('notebook-page component', notebookService);
    }

    //TODO: Handle multiple entries per day
    //TODO: More logical way of handling first missing level
    ngOnInit() {
        this.calendarService.selectedDate.subscribe(data => {
            this.saveContent();
            this.loadContent(data);
        });
    }

    saveContent(): void {
        this.notebookService.addEntry(this.currentPath, this.editorContent);
    }

    loadContent(data: string): void {
        let entries = this.notebookService.openEntries(data);

        this.currentPath = data;
        this.contentService.changePath(data);

        console.info('retrieved entries', entries, this.currentPath);
        if (isNaN(entries[0])) {
            this.editorContent = entries[0].contents;
        } else {
            this.editorContent = '';
        }
        this.contentService.changeContent(this.editorContent);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
