import { Entity } from "../interfaces/entity-interface";
import { Base } from "./base";

export class Container extends Base{

    constructor(){
        super();
    }

    //NOTE: This may have to be a uuid reference due to browser memory?
    addChild(child: Entity){
        this.dateModified = new Date();
        child.parentUuid = this.uuid;
        this.children.push(child);
    }
}
