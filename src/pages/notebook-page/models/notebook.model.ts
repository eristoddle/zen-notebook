import { Binder } from './../../../models/binder';

export class Notebook extends Binder{

    constructor(options) {
        options.alias = 'Notebook';
        options.type = 'Notebook';
        super(options);;
    }

}
