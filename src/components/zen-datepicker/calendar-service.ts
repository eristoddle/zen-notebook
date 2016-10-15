import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class CalendarService {
    private selectedDate = new BehaviorSubject<string>(new Date().toString());

    dateChanged$ = this.selectedDate.asObservable();

    changeDate(date: string): void {
        console.log('calendar-service changeDate', date);
        this.selectedDate.next(date);
    }
}
