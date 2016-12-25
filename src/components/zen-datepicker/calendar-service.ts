import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }    from 'rxjs';

@Injectable()
export class CalendarService {
    
    private currentDate: Date = new Date();

    selectedDate: Subject<string> = new BehaviorSubject<string>(
        `${this.currentDate.getFullYear()}-${this.currentDate.getMonth() + 1}-${this.currentDate.getDate()}`
    );

    public changeDate(date: string): void {
        this.selectedDate.next(date);
    }
}
