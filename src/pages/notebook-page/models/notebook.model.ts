import loki from 'lokijs';
import { Binder } from './../../../models/binder';

export class Notebook {

    public binder: Binder;
    public database: any;

    constructor() {
        //super();
        this.database = new loki('loki.json', {
            autoload: true,
            //autoloadCallback: loadHandler,
            autosave: true,
            autosaveInterval: 10000,
            persistenceMethod: 'localStorage'
        });

        let items = this.database.addCollection('items');

        items.insert({ name: 'mjolnir', owner: 'thor', maker: 'dwarves' });
        items.insert({ name: 'gungnir', owner: 'odin', maker: 'elves' });
        items.insert({ name: 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
        items.insert({ name: 'draupnir', owner: 'odin', maker: 'elves' });

        let tyrfing = items.findOne({'name': 'tyrfing'});
        tyrfing.owner = 'arngrim';
        items.update(tyrfing);

        console.log(this.database);
    }

}
