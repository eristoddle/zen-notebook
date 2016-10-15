import { UUID } from 'angular2-uuid';
import * as _ from "lodash";

import { Entity } from "../interfaces/entity-interface";
import { Options } from "../interfaces/options-interface";

export class Base implements Entity{

    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    children?: Entity[];
    parentUuid?: string;
    customMeta: any;
    sortOrder: number;
    level: number;
    model: string;
    type: string;
    _: any = _;

    /**
     * @param  {object}  options     Object containing the following keys:
     * @param  {string}  type        Final type(class) of Entity
     * @param  {string}  title       Title of Entity
     * @param  {string}} description Description of Entity
     * @return {void}
     */
    constructor(options:Options){
        Object.assign(this, options);
        this.dateCreated = new Date();
        this.dateModified = this.dateCreated;
        this.uuid = UUID.UUID();
    }

    save(){
        this.dateModified = new Date();
    }

    delete(){

    }

    export(){

    }
}
