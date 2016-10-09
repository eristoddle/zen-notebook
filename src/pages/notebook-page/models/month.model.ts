import { Container } from './../../../models/container';
import { Day } from './day.model';

export class Month extends Container{

    alias: string = 'Month';
    children: Day[];

    constructor(options){
        super(options);
    }

}
