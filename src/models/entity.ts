//TODO: Come up with an interface for meta and possibly this
export class Entity{
    uuid: string;
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    //TODO: Need to find a way to specify any class that inherits from enitty
    children: any[];
    parent: any;
    meta: any;

    constructor(){

    }
}
