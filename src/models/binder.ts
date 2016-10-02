/// <reference path="./entity.ts"/>
import { Entity } from "./entity";

/**
 * The notebook, book, project or file
 */
export class Binder extends Entity{
    //TODO: Make this load available type into an enum
    type: string;
    //TODO: This should also be a enum
    storage: any;
    //Rules for the binder type
    schema: any;

    constructor(){
        super();
    }
}
