/// <reference path="./base.ts"/>
import {Base} from "./base";

export class Entry extends Base{

    content: string;
    mimeType: MimeType;
    extension: string;
    characterEncoding: string;

    constructor(){
        super();
    }
}
