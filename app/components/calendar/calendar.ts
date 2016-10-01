import { Component } from '@angular/core';

//OR: https://www.npmjs.com/package/angular2-calendar
@Component({
    selector: 'calendar',
    template: '<div>{{calendarMarkup}}</div>'
})
export class Calendar {
    public calendarMarkup: string;
    public currentDate: Date;
    public monthNames: Array<string>;
    public days: Array<string>;

    constructor() {
        this.currentDate = new Date();
        this.days = ['s', 'm', 't', 'w', 't', 'f', 's'];
        this.calendarMarkup = this.getTemplate(9,25,2016);
    }

    daysInMonth(date: Date) {
        var isLeapYear = function(year) {
            return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
        };
        return [31, (isLeapYear(date.getYear()) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
    }

    formatDateHeading (date: Date) {
        var m = this.monthNames[date.getMonth()];
        return m.charAt(0).toUpperCase() + m.slice(1) + ' ' + date.getFullYear();
    }

    getTemplate(month: number, year: number, dates:number) {
        var month = ((isNaN(month) || month == null) ? this.currentDate.getMonth() + 1 : month) - 1,
            year = (isNaN(year) || year == null) ? this.currentDate.getFullYear() : year,
            firstDay = new Date(
                year, month, 1),
            startDay = firstDay.getDay(),
            monthLength = this.daysInMonth(firstDay),
            heading = this.formatDateHeading(firstDay),
            tpl = [
                '<div id="cal" class="cal">',
                '<table class="cal">',
                '<tr><th colspan="7">' + heading + '</th></tr>',
                '<tr>'],
            day = 1,
            rows = Math.ceil((monthLength + startDay) / 7);
        if (!dates || !dates.length) dates = [this.currentDate.getDate()];
        this.days.forEach(function(day) {
            tpl.push('<td class="cal-head">' + day.toUpperCase() + '</td>');
        });
        tpl.push('</tr>');
        for (var i = 0; i < rows; i++) {
            var row = ['<tr>'];
            for (var j = 0; j < 7; j++) {
                row.push('<td>');
                if (day <= monthLength && (i > 0 || j >= startDay)) {
                    var trueYear = year;
                    var nextYear = year;
                    var date = year + '-' + month + '-' + day;
                    var trueMonth = month + 1;
                    if (trueMonth == 13) {
                        trueMonth = 1;
                        trueYear = year + 1;
                        nextYear = trueYear;
                    }
                    var nextMonth = trueMonth + 1;
                    if (nextMonth == 13) {
                        nextMonth = 1;
                        nextYear = year + 1;
                    }
                    var trueDate = year + '-' + trueMonth + '-' + day;
                    if (dates.indexOf(day) == -1) {
                        //TODO: Have a today custom class
                        //TODO: This check doesn't work on first load - need a notebook init function
                        if (notebookFactory.getDaysContent(trueDate).length > 0) {
                            row.push('<div class="cal-day cal-content" data-date="' + trueDate +
                                '" data-month=' + trueMonth + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                        } else {
                            row.push('<div class="cal-day" data-date="' + trueDate +
                                '" data-month=' + trueMonth + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                        }
                    } else {
                        row.push('<div class="cal-day cal-highlight" data-date="' + trueDate +
                            '" data-month=' + trueMonth + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                    }
                    row.push(day + '</div>');
                    day++;
                }
                row.push('</td>');
            }
            row.push('</tr>');
            tpl.push(row.join(''));
        }
        tpl.push('</table><div class="navigation"><span class="fa fa-arrow-left" data-month=' + (trueMonth - 1) + ' data-year=' + year + ' data-action="month-back" changedate></span>' +
            '<span class="today" data-month=' + trueMonth + ' data-day=' + this.currentDate.getDate() + ' data-year=' + year + ' data-action="set-date" changedate>Today</span>' +
            '<span class="fa fa-arrow-right" data-month=' + nextMonth + ' data-year=' + nextYear + ' data-action="month-forward" changedate></span></div></div>');
        return tpl.join('');
    }
}
