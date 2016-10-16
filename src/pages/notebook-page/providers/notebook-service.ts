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

    constructor(private storage: StorageService) {
        //TODO: Think about this, the base service only deals with data agnostically
        //Where should notebook be instansiated
        //Maybe this should be a place for npm mixin to combine two base classes: Notebook and StorageService
        //Just thinking of the best pattern
        //And should options and schema come from a json config file?
        //Maybe options should have an interface like binderOptions
        //To prevent hunting down the base class to see what you need every time
        let binderOptions = {
            title: 'Writing Practice',
            description: 'From "Writing Down the Bones" by Natalie Goldberg',
            customMeta: {

            }
        }

        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonth = this.currentDate.getMonth();
        this.currentDay = this.currentDate.getDay();
        this.notebook = new Notebook(binderOptions);

        //TODO: Most of these options should be defaults
        let entryOptions = {
            title: `${this.currentMonth}-${this.currentDay}-${this.currentYear}`,
            description: 'Notebook Entry',
            mimeType: 'text/plain',
            extension: 'md',
            characterEncoding: 'UTF-8',
            contents: `Lorizzle ipsizzle dolor mah nizzle amizzle, consectetuer adipiscing elit. Nullam sapizzle velit, sizzle bling bling, suscipizzle quis, gravida vizzle, ass. Pellentesque eget yo mamma. Sizzle erizzle. Black izzle dolizzle funky fresh turpis tempizzle own yo'. Mauris pellentesque its fo rizzle izzle turpizzle. Vestibulum izzle crazy. Shiznit away rhoncizzle nisi. In hac hizzle platea dictumst. Break it down dapibizzle. Phat gangster urna, pretizzle crazy, mattizzle dawg, eleifend pizzle, nunc. The bizzle suscipit. Integizzle semper velizzle da bomb purus.`
        }

        this.addEntry(
            `${this.currentMonth}-${this.currentDay}-${this.currentYear}`,
            entryOptions
        );
        storage.setObject('zen-notebook', this.notebook);
    }

    //TODO: Don't send a new object to each method
    addEntry(fullDate: string, entryOptions: any){
        let [month, day, year] = fullDate.split('-');
        let yearObject = this.notebook.getChildByTitle(
            new Year({ title: year}),
            year
        );
        let monthObject = yearObject.getChildByTitle(
            new Month({title: month}),
            month
        );
        let dayObject = monthObject.getChildByTitle(
            new Day({title: day}),
            day
        );
        let entry = new Entry(entryOptions);
        dayObject.addChild(entry);
    }

}
