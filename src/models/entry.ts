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
    }
}
