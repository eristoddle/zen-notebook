export interface Entity {
    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    //TODO: Need to find a way to specify any class that inherits from entity or an enum type
    children: any[];
    parentUuid: string;
    meta: any;
}
