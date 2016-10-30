import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }    from 'rxjs';

import { StorageService } from './storage-service';

//TODO: Refactor and figure out a better pattern
@Injectable()
export class SettingsService {

    //public rawData;
    //TODO: Change all to private with get and set
    private _filePath: any;
    recentFiles: Array<string>;
    theme: string;

    rawData: Subject<any> = new BehaviorSubject<any>('');

    constructor(private storageService: StorageService) {
        this._filePath = {
            icon: 'folder',
            title: 'File Path',
            description: 'Location to store journal json file',
            value: '/Users/stemiller/Dropbox/Writing/ZenNotebook/newVersion.json',
            fileDialog: true,
            tempData: null
        };
    }

    public setRawData(data:any){
        this.rawData.next(data);
    }

    //TODO: Dumb, change to type and use in settings.ts also
    public getSettings():Array<{
        title: string,
        note: string,
        icon: string,
        value: any,
        fileDialog: boolean,
        tempData: any
    }> {
        let settings = [];
        for (const key in this) {
            if(key.slice(0, 1) === '_'){
                let obj = this[key];
                settings.push(obj);
            }
        }
        return settings;
    }

    public changeValue(setting: string, value: any) {
        this[`_${setting}`].value = value;
    }

    public get filePath(): any {
        return this._filePath;
    }

    public set filePath(value: any) {
        this._filePath = value
    }

}
