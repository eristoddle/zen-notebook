import { Entry } from './../../../models/entry';
import { Container } from './../../../models/container';

export class Day extends Container{

    alias: string = 'Day';
    children: Entry[];

    constructor(options){
        super(options);
    }

}
