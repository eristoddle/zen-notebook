import * as Loki from 'lokijs';
import { Binder } from './../../../models/binder';

export class Notebook {

    public binder: Binder;
    public database: Loki;
    public dboptions: any;

    constructor() {
        //super();
        this.dboptions = {

        }
        //this.database = new Loki('notebook', this.dboptions);
        //new LokiLocalStorageAdapter()
    }

}
