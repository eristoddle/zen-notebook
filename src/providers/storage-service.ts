import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//https://github.com/techfort/LokiJS/wiki/LokiJS-persistence-and-adapters
//TODO: Watch this issue I am having: https://forum.ionicframework.com/t/lokijs-in-rc0/65233/3
//NOTE: This is a vary specific import style
//import LokiCordovaFSAdapter from "cordova-file-system-adapter";
//import * as LokiNativescriptAdapter from 'loki-indexed-adapter';
import loki from 'lokijs';

@Injectable()
export class StorageService {

    private data: any;
    /**
     * Data not yet saved to database
     * TODO: This have to be an object or hold possibly more than one value
     * @type {string}
     */
    private _tempData: string;
    public database: any;

    constructor(public http: Http) {
        this.database = new loki('zen-notebook.json', {
            autoload: true,
            //TODO: This is how I would load from a file or remote connection if it exists instead of from localStorage
            //autoloadCallback: loadHandler,
            autosave: true,
            autosaveInterval: 10000,
            persistenceMethod: 'localStorage'
        });

        // let items = this.database.addCollection('items');
        //
        // items.insert({ name: 'mjolnir', owner: 'thor', maker: 'dwarves' });
        // items.insert({ name: 'gungnir', owner: 'odin', maker: 'elves' });
        // items.insert({ name: 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
        // items.insert({ name: 'draupnir', owner: 'odin', maker: 'elves' });
        //
        // let tyrfing = items.findOne({ 'name': 'tyrfing' });
        // tyrfing.owner = 'arngrim';
        // items.update(tyrfing);
    }

    public addCollection(name: string){
        return this.database.addCollection(name);
    }

    public get tempData():string{
        //TODO: Retrieve from localStorage
        return this._tempData;
    }

    public set tempData(value:string){
        //TODO: Store in localStorage
        this._tempData = value;
    }

    public load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('path/to/data.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

}
