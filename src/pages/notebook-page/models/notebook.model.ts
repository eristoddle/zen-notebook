import { Binder } from './../../../models/binder';

export class Notebook extends Binder{

    constructor() {
        super();
        this.alias = 'Notebook';
        this.type = 'notebook';
    }

}
