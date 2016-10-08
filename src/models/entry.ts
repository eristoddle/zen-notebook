import { Entity } from "../interfaces/entity-interface";
import { Content } from "../interfaces/content-interface";
import { Base } from "./base";

export class Entry extends Base implements Content{

    content: string;
    mimeType: MimeType;
    extension: string;
    characterEncoding: string;
    embeds: Entity[];

    constructor(){
        super();
        this.children = null;
    }

    //NOTE: This may have to be a uuid reference due to browser memory?
    embed(embed: Entity){
        this.dateModified = new Date();
        embed.parentUuid = this.uuid;
        this.embeds.push(embed);
    }
}
