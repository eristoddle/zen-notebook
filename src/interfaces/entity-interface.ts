export interface Entity {

    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    children: any[];
    parentUuid: string;
    customMeta: any;
    sortOrder: number;
    level: number;
    model: string;
    type: string;

}
