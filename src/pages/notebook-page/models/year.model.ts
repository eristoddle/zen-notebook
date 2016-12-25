import { Container } from './../../../models/container';
import { Month } from './month.model';

export class Year extends Container{

    alias: string = 'Year';
    children: Month[];

    constructor(options){
        super(options);
    }

}
