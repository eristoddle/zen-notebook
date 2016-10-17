import { Entity } from "../interfaces/entity-interface";
import { Base } from "./base";

export class Container extends Base{

    constructor(options){
        super(options);
        this.children = [];
    }

    //TODO: Base the storage pattern on the schema structure
    addChild(child: Entity){
        this.dateModified = new Date();
        child.parentUuid = this.uuid;
        child.level = this.level + 1;
        this.children.push(child);
    }

    findChildByTitle(title: string){
        return this._.find(this.children, ['title', title]);
    }

    findChildByUuid(uuid: string){
        return this._.find(this.children, ['uuid', uuid]);
    }

    getChildByTitle(newChild: any, title: string){
        let child = this._.find(this.children, ['title', title]);
        if (child){
            return child;
        }
        this.addChild(newChild);
        return newChild;
    }

    getChildren(){
        return this.children;
    }

}
