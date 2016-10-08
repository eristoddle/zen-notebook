import { UUID } from 'angular2-uuid';

import { Entity } from "../interfaces/entity-interface";

export class Base implements Entity{

    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    children: Entity[];
    parentUuid: string;
    customMeta: any;
    sortOrder: number;
    level: number;
    model: string;
    type: string;

    constructor(options:{alias: string, type: string}){
        this.alias = options.alias;
        this.type = options.type;
        this.dateCreated = new Date();
        this.dateModified = this.dateCreated;
        this.uuid = UUID.UUID();
    }

    save(){
        this.dateModified = new Date();
    }

    delete(){

    }
}
