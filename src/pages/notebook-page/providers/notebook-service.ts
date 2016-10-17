import { Injectable } from '@angular/core';

import { Notebook } from './../models/notebook.model';
import { Year } from './../models/year.model'
import { Month } from './../models/month.model'
import { Day } from './../models/day.model'
import { Entry } from './../../../models/entry';
import { Options } from "../../../interfaces/options-interface";
import { StorageService } from '../../../providers/storage-service';

//TODO: Move functionality up the class chain and add functions to interfaces
@Injectable()
export class NotebookService {

    notebook: Notebook;
    currentDate: Date;
    currentYear: number;
    currentMonth: number;
    currentDay: number;
    //TODO: Move this
    defaultEntryOptions: any = {
        description: 'Notebook Entry',
        mimeType: 'text/plain',
        extension: 'md',
        characterEncoding: 'UTF-8'
    };
    defaultBinderOptions: any = {
        title: 'Writing Practice',
        description: 'From "Writing Down the Bones" by Natalie Goldberg',
        customMeta: {}
    }

    constructor(private storage: StorageService) {
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        //TODO: Deal with JS month BS
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.currentDay = this.currentDate.getDate();
        this.notebook = new Notebook(this.defaultBinderOptions);

        let entryOptions = {
            contents: `Lorizzle ipsizzle dolor mah nizzle amizzle, consectetuer adipiscing elit. Nullam sapizzle velit, sizzle bling bling, suscipizzle quis, gravida vizzle, ass. Pellentesque eget yo mamma. Sizzle erizzle. Black izzle dolizzle funky fresh turpis tempizzle own yo'. Mauris pellentesque its fo rizzle izzle turpizzle. Vestibulum izzle crazy. Shiznit away rhoncizzle nisi. In hac hizzle platea dictumst. Break it down dapibizzle. Phat gangster urna, pretizzle crazy, mattizzle dawg, eleifend pizzle, nunc. The bizzle suscipit. Integizzle semper velizzle da bomb purus.`
        }

        this.addEntry(
            `${this.currentYear}-${this.currentMonth}-${this.currentDay}`,
            entryOptions
        );
        storage.setObject('zen-notebook', this.notebook);
    }

    openEntries(fullDate: string) {
        return this.notebook.getEntriesByPath(fullDate, '-');
    }

    //TODO: Don't send a new object to each method
    //TODO use getEntriesByPath & createEntryByPath
    addEntry(fullDate: string, entryOptions: any) {
        Object.assign(entryOptions, this.defaultEntryOptions);
        entryOptions.title = fullDate;

        let [year, month, day] = fullDate.split('-');

        let yearObject = this.notebook.getChildByTitle(
            new Year({ title: year }),
            year
        );

        let monthObject = yearObject.getChildByTitle(
            new Month({ title: month }),
            month
        );

        let dayObject = monthObject.getChildByTitle(
            new Day({ title: day }),
            day
        );

        let entry = new Entry(entryOptions);
        dayObject.addChild(entry);
        console.log('entry added', this.notebook);
    }

    editEntry(fullDate: string, entryOptions: any) {
        this.notebook.editEntry(entryOptions, fullDate, '-')
    }

}
