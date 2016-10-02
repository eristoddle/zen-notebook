/// <reference path="./entity.ts"/>
import { Entity } from "./entity";

export class Entry extends Entity{

    content: string;
    mimeType: MimeType;
    extension: string;
    characterEncoding: string;
    embeds: string[];

    constructor(){
        super();
    }
}
