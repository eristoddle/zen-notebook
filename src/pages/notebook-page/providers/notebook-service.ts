import { Injectable } from '@angular/core';

import { Notebook } from './../models/notebook.model'
import { StorageService } from '../../../providers/storage-service';

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
        let options = {
            title: 'Writing Practice',
            description: 'From "Writing Down the Bones" by Natalie Goldberg',
            customMeta:{

            }
        }

        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonth = this.currentDate.getMonth();
        this.currentDay = this.currentDate.getDay();
        this.notebook = new Notebook(options);
        //TODO: Don't hardcode this, put it in a more logical location
        this.collection = this.addCollection('binder');
    }

    addEntry(){

    }
}
