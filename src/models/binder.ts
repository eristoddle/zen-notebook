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

    /**
     * [getEntriesByPath get list of entries in container]
     * @param  {string} path [description]
     * @return {[type]}      [description]
     */
    getEntriesByPath(path: string, delimiter: string): any[] {
        let parts = path.split(delimiter);
        let firstMissingLevel;
        let firstMissingTitle;
        let currentObject = this;
        let entries;

        console.log('getEntriesByPath', parts);
        parts.forEach((part, index) => {
            if(currentObject){
                currentObject = currentObject.findChildByTitle(part);
                if(currentObject){
                    entries = currentObject.getChildren();
                } else {
                    firstMissingTitle = part;
                    firstMissingLevel = index + 1;
                }
            }
        });

        if (!firstMissingLevel){
            return entries;
        } else {
            return [firstMissingLevel, firstMissingTitle];
        }
    }

}
