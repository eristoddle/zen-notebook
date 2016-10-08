import { Entity } from "../interfaces/entity-interface";
import { Base } from "./base";

export class Container extends Base{

    constructor(options){
        super(options);
    }

    //NOTE: This may have to be a uuid reference due to browser memory?
    addChild(child: Entity){
        this.dateModified = new Date();
        child.parentUuid = this.uuid;
        child.level = this.level + 1;
        this.children.push(child);
    }
}
