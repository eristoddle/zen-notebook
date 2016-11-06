import { Injectable, OnInit } from '@angular/core';

import { Notebook } from './../models/notebook.model';
import { Year } from './../models/year.model'
import { Month } from './../models/month.model'
import { Day } from './../models/day.model'
import { Entry } from './../../../models/entry';
import { Options } from "../../../interfaces/options-interface";
import { StorageService } from '../../../providers/storage-service';
import { SettingsService } from '../../../providers/settings-service';

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

    //TODO: settings should actually determine mode page to load also
    //TODO: Move all settingsService implementation to the page.
    constructor(private storage: StorageService, private settingsService: SettingsService) {
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        //TODO: Deal with JS month BS
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.currentDay = this.currentDate.getDate();
        if (settingsService.filePath) {
            this.notebook = new Notebook({ filePath: settingsService.filePath });
        } else {
            this.notebook = new Notebook(this.defaultBinderOptions);
        }

        storage.setObject('zen-data', this.notebook);
    }

    loadData(data: any) {
        if (data.result) {
            let obj = JSON.parse(data.result);
            let file = obj.file;

            this.settingsService.changeValue('filePath', file);

            if (obj instanceof Notebook) {
                this.loadNotebook(obj, file);
            } else if (obj.years) {
                this.importLegacyData(obj, file);
            } else {
                console.log('Error loading data', data);
            }
            console.log('notebook loaded', this.notebook);
        }
    }

    //TODO: Write load notebook
    loadNotebook(obj, file) {
        this.notebook = obj;
        this.notebook.filePath = file;
    }

    openEntries(fullDate: string) {
        return this.notebook.getEntriesByPath(fullDate, '-');
    }

    //TODO: Don't send a new object to each method
    //TODO use getEntriesByPath & createEntryByPath
    //TODO: Make date an array instead of all this damn string parsing
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
        this.storage.setObject('zen-data', this.notebook);
    }

    editEntry(fullDate: string, entryOptions: any) {
        this.notebook.editEntry(entryOptions, fullDate, '-');
        this.storage.setObject('zen-data', this.notebook);
    }

    importLegacyData(data: any, path: string) {
        this.notebook = new Notebook(this.defaultBinderOptions);
        this.notebook.filePath = path;

        Object.keys(data.years).forEach(function(key) {
            let year = data.years[key];
            let yearString = key;
            Object.keys(year).forEach(function(key) {
                let month = year[key];
                let monthString = key;
                Object.keys(month).forEach(function(key) {
                    let day = month[key];
                    let dayString = key;
                    if(day.content){
                        //TODO: Refactor when path is array
                        let fullDate = `${yearString}-${monthString}-${dayString}`
                        let entryOptions = {
                            content: day.content,
                            customMeta: {
                                wordCount: (day.word_count ? day.word_count : day.content.length)
                            }
                        }
                        this.addEntry(fullDate, entryOptions);
                    }
                }, this);
            }, this);
        }, this);
    }

}
