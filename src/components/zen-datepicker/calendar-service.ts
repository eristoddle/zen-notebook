import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }    from 'rxjs';

@Injectable()
export class CalendarService {
    selectedDate: Subject<string> = new BehaviorSubject<string>(new Date().toString());

    public changeDate(date: string): void {
        this.selectedDate.next(date);
    }
}
