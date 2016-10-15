import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { contentEditableDirective } from '../../components/contenteditable/contenteditable';
import { ZenHeader } from '../../components/zen-header/zen-header';
import { NotebookService } from './providers/notebook-service';
import { StorageService } from '../../providers/storage-service';
import { CalendarService } from '../../components/zen-datepicker/calendar-service';

@Component({
    selector: 'notebook',
    templateUrl: 'notebook-page.html',
    providers: [
        StorageService,
        NotebookService,
        CalendarService
    ]
})
export class NotebookPage implements OnDestroy, OnInit {
    editorContent: string;
    subscription: Subscription;

    constructor(private notebookService: NotebookService, private calendarService: CalendarService) {
        this.editorContent = '';
        console.log('notebook-page component', notebookService);
    }

    ngOnInit(){
        this.calendarService.dateChanged$.subscribe(data => {
            console.log('date change subscribe', data);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
