import { Binder } from './../../../models/binder';

export class Notebook extends Binder{

    constructor(options, schema) {
        options.alias = 'Notebook';
        options.type = 'Notebook';
        super(options, schema);;
    }

}
