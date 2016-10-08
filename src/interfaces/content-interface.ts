import { Entity } from "../interfaces/entity-interface";

export interface Content{
    content: string;
    mimeType: MimeType;
    extension: string;
    characterEncoding: string;
    embeds: Entity[]
}
