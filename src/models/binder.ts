import { Container } from "./container";
import { Entity } from "../interfaces/entity-interface";

/**
 *
 * The highest class in the heirarchy
 * The notebook, book, project or file
 * Has no parent
 */
export class Binder extends Container{

    type: string;

    constructor(){
        super();
        this.parentUuid = null;
    }

    generateSchema(){
        
    }
}
