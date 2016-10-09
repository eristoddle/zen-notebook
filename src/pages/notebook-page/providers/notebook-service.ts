import { Injectable } from '@angular/core';

import { Notebook } from './../models/notebook.model';
import { Year } from './../models/year.model'
import { Month } from './../models/month.model'
import { Day } from './../models/day.model'
import { Entry } from './../../../models/entry';
import { StorageService } from '../../../providers/storage-service';

//TODO: Move functionality up the class chain and add functions to interfaces
@Injectable()
export class NotebookService extends StorageService {

    notebook: Notebook;
    collection: any;
    currentDate: Date;
    currentYear: number;
    currentMonth: number;
    currentDay: number;

    constructor() {
        //TODO: Fix this constructor
        super();
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
        //TODO: Don't hardcode this, put it in a more logical location
        this.collection = this.addCollection('binder');
        this.collection.insert(this.notebook);

        //TODO: Most of these options should be defaults
        let entryOptions = {
            title: `${this.currentMonth}-${this.currentDay}-${this.currentYear}`,
            description: 'Notebook Entry',
            mimeType: 'text/plain',
            extension: 'md',
            characterEncoding: 'UTF-8',
            contents: `Lorizzle ipsizzle dolor mah nizzle amizzle, consectetuer adipiscing elit. Nullam sapizzle velit, sizzle bling bling, suscipizzle quis, gravida vizzle, ass. Pellentesque eget yo mamma. Sizzle erizzle. Black izzle dolizzle funky fresh turpis tempizzle own yo'. Mauris pellentesque its fo rizzle izzle turpizzle. Vestibulum izzle crazy. Shiznit away rhoncizzle nisi. In hac hizzle platea dictumst. Break it down dapibizzle. Phat gangster urna, pretizzle crazy, mattizzle dawg, eleifend pizzle, nunc. The bizzle suscipit. Integizzle semper velizzle da bomb purus.`
        }

        let entry = new Entry(entryOptions);

        let year = this.getYear(this.currentYear);
        let month = this.getMonth(year, this.currentMonth);
        this.getEntry(month, entry);
    }

    getEntry(month:Month, entry: Entry) {
        let [mon, day, year] = entry.title.split('-');

        let dayOptions = {
            title: day.toString(),
            description: '',
            parentUuid: month.uuid,
            customMeta: {}
        }
        let dayEntity = new Day(dayOptions);
        //month.addChild(dayEntity);
        return dayEntity;
    }

    getYear(year:number){
        let yearOptions = {
            title: year.toString(),
            description: '',
            parentUuid: this.notebook.uuid,
            customMeta: {}
        }
        let yearEntity = new Year(yearOptions);
        console.log('in year', this.notebook);
        //this.notebook.addChild(yearEntity);
        return yearEntity;
    }

    getMonth(year:Year, month:number){
        let monthOptions = {
            title: month.toString(),
            description: '',
            parentUuid: year.uuid,
            customMeta: {}
        }
        let monthEntity = new Month(monthOptions);
        //year.addChild(monthEntity);
        return monthEntity;
    }
}
