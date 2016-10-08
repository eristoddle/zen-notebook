import { UUID } from 'angular2-uuid';

import { Entity } from "../interfaces/entity-interface";

export class Container implements Entity{

    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    children: Entity[];
    parentUuid: string;
    meta: any;

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

    addChild(child: Entity){
        this.dateModified = new Date();
        child.parentUuid = this.uuid;
        this.children.push(child);
    }
}
