import { Binder } from './../../../models/binder';
import { Year } from './year.model';

export class Notebook extends Binder{

    children: Year[];

    constructor(options) {
        options.alias = 'Notebook';
        options.type = 'Notebook';
        super(options);;
    }

}
