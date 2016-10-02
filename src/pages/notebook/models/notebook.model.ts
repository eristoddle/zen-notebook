//https://github.com/techfort/LokiJS/wiki/LokiJS-persistence-and-adapters
//TODO: Watch this issue I am having: https://forum.ionicframework.com/t/lokijs-in-rc0/65233/3
//NOTE: This is a vary specific import style
import loki from 'lokijs';
//import * as LokiNativescriptAdapter from 'loki-indexed-adapter';
import { Binder } from './../../../models/binder';

export class Notebook {

    public binder: Binder;
    public database: any;

    constructor() {
        //super();
        console.log('loki', loki, this.database);
        this.database = new loki('notebook');
        // this.database = new Loki('loki.json', {
        //     autoload: true,
        //     //autoloadCallback: loadHandler,
        //     autosave: true,
        //     autosaveInterval: 10000,
        //     persistenceMethod: 'localStorage',
        //     //collections: ['items']
        //     // adapter: new LokiNativescriptAdapter()
        // });
        //
        // let items = this.database.addCollection('items');
        //
        // items.insert({ name: 'mjolnir', owner: 'thor', maker: 'dwarves' });
        // items.insert({ name: 'gungnir', owner: 'odin', maker: 'elves' });
        // items.insert({ name: 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
        // items.insert({ name: 'draupnir', owner: 'odin', maker: 'elves' });
        //
        // console.log(this.database);
    }

}
