import { Container } from "./container";
import { Entity } from "../interfaces/entity-interface";

export enum schemaStructure {
    hierarchal,
    collection,
    flat,
    filebased
}

/**
 * The highest class in the heirarchy
 * The notebook, book, project or file
 * Has no parent
 */
export class Binder extends Container{

    level: number = 0;
    model: string = 'Binder';
    sortOrder: number = 0;
    /**
     * Is this a template for other binders?
     * @type {boolean}
     */
    template: boolean;
    structure: schemaStructure = schemaStructure.hierarchal;

    /**
     * @param  {[type]} options [description]
     * @param  {[type]} schema  [description]
     * @return {[type]}         [description]
     */
    constructor(options){
        super(options);
    }

}
