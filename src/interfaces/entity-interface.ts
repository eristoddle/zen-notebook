export interface Entity {
    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    //NOTE: This may have to be a uuid reference due to browser memory?
    children: any[];
    parentUuid: string;
    //NOTE: would rather call this meta, but lokijs uses that
    metaData: any;
}
