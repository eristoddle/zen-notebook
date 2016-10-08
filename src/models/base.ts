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
    metaData: any;

    constructor(){
        this.dateCreated = new Date();
        this.dateModified = this.dateCreated;
        this.uuid = UUID.UUID();
    }

    init(options){
        //title, description and meta
    }

    update(){
        this.dateModified = new Date();
    }
}
