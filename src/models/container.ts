import { Entity } from "../interfaces/entity-interface";

export class Container implements Entity{

    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    //TODO: Need to find a way to specify any class that inherits from enitty or enums
    children: any[];
    parent: any;
    meta: any;

    constructor(){
        this.dateCreated = new Date();
    }
}
