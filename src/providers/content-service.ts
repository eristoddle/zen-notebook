import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ContentService {

    private currentContent: string = '';

    liveContent: Subject<string> = new BehaviorSubject<string>(this.currentContent);

    public changeContent(content: string): void {
        this.liveContent.next(content);
    }

}
