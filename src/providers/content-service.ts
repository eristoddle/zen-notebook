import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ContentService {

    private currentContent: string = '';
    private currentPath: string = '';
    public delimiter: string;

    liveContent: Subject<string> = new BehaviorSubject<string>(this.currentContent);
    livePath: Subject<string> = new BehaviorSubject<string>(this.currentPath);

    public changeContent(content: string): void {
        this.liveContent.next(content);
    }

    public changePath(path: string): void {
        this.livePath.next(path);
    }
}
