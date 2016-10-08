import { Entity } from "../interfaces/entity-interface";

/**
 * Base interface for all content types
 */
export interface Content{

    content: string;
    mimeType: MimeType;
    extension: string;
    characterEncoding: string;
    embeds: Entity[]

}
