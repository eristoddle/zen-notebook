import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { contentEditableDirective } from '../../components/contenteditable/contenteditable';
import { ZenHeader } from '../../components/zen-header/zen-header';
import { NotebookService } from './providers/notebook-service';
import { StorageService } from '../../providers/storage-service';
import { CalendarService } from '../../components/zen-datepicker/calendar-service';
import { ContentService } from '../../providers/content-service';
import { SettingsService } from '../../providers/settings-service';

@Component({
    selector: 'notebook',
    templateUrl: 'notebook-page.html'
})
export class NotebookPage implements OnDestroy, OnInit {
    editorContent: string;
    currentPath: string;
    currentEntryOptions: string;
    subscription: Subscription;

    constructor(private notebookService: NotebookService, private calendarService: CalendarService, private contentService: ContentService, private settingsService: SettingsService) {
        this.contentService.delimiter = '-';
        this.editorContent = '';
    }

    ngOnInit() {
        this.calendarService.selectedDate.subscribe(data => {
            this.saveContent();
            this.loadContent(data);
        });
        this.settingsService.rawData.subscribe(data => {
            this.notebookService.loadData(data);
        });
    }

    saveContent(): void {
        if (this.currentPath && this.editorContent.length) {
            if(this.currentEntryOptions){
                Object.assign(this.currentEntryOptions, { contents: this.editorContent })
                this.notebookService.editEntry(this.currentPath, this.currentEntryOptions);
            } else {
                this.notebookService.addEntry(this.currentPath, { contents: this.editorContent });
            }
        }
    }

    //TODO: Handle multiple entries per day
    //TODO: More logical way of handling first missing level
    loadContent(data: string): void {
        let entries = this.notebookService.openEntries(data);

        this.currentPath = data;
        this.contentService.changePath(data);

        console.info('retrieved entries', entries, this.currentPath);
        if (isNaN(entries[0])) {
            this.editorContent = entries[0].contents;
            this.currentEntryOptions = entries[0];
        } else {
            this.editorContent = '';
            this.currentEntryOptions = '';
        }

        this.contentService.changeContent(this.editorContent);
    }

    ngOnDestroy(){
        //TODO: Only good at creating console errors?
        //this.subscription.unsubscribe();
    }
}
