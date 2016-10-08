import { Container } from "./container";
import { Entity } from "../interfaces/entity-interface";

/**
 *
 * The highest class in the heirarchy
 * The notebook, book, project or file
 * Has no parent
 */
export class Binder extends Container{

    parentUuid: string = null;
    level: number = 0;
    model: string = 'Binder';
    sortOrder: number = 0;
    schema: any;
    template: boolean;

    constructor(options, schema){
        super(options);
        this.schema = schema;
    }

}
