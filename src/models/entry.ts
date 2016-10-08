import { Entity } from "../interfaces/entity-interface";
import { Content } from "../interfaces/content-interface";
import { Base } from "./base";

export class Entry extends Base implements Content{

    content: string;
    mimeType: MimeType;
    extension: string;
    characterEncoding: string;
    embeds: Entity[];
    children: any[] = null;

    constructor(options){
        super(options);
    }

    //NOTE: This may have to be a uuid reference due to browser memory?
    embed(embed: Entity){
        this.dateModified = new Date();
        embed.parentUuid = this.uuid;
        embed.level = this.level + 1;
        this.embeds.push(embed);
    }

    get wordCount(): number{
        return 0;
    }
}
