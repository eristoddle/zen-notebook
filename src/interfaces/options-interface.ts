import { Entity } from "../interfaces/entity-interface";

/**
 * Just an interface so I don't have huge objects in model constructors
 */
export interface Options{

    //Entity
    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    children?: any;
    parentUuid?: string;
    customMeta: any;
    sortOrder: number;
    level: number;
    model: string
    type: string;

    //Content
    content?: string;
    mimeType?: MimeType;
    extension?: string;
    characterEncoding?: string;
    embeds?: Entity[]

}
