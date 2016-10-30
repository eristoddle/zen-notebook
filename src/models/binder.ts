import { Container } from "./container";
import { Entity } from "../interfaces/entity-interface";
import { StorageService } from '../providers/storage-service';

export enum schemaStructure {
    hierarchal,
    collection,
    flat,
    filebased
}

/**
 * The highest class in the heirarchy
 * The notebook, book, project or file
 * Has no parent
 */
export class Binder extends Container {

    level: number = 0;
    model: string = 'Binder';
    sortOrder: number = 0;
    /**
     * Is this a template for other binders?
     * @type {boolean}
     */
    template: boolean;
    structure: schemaStructure = schemaStructure.hierarchal;
    filePath: string;

    /**
     * @param  {[type]} options [description]
     * @param  {[type]} schema  [description]
     * @return {[type]}         [description]
     */
    constructor(options) {
        super(options);
        if (options.filePath) {
            this.filePath = options.filePath;
        }
    }

    /**
     * [getEntriesByPath get list of entries in container]
     * @param  {string} path [description]
     * @return {[type]}      [description]
     */
    //TODO: remove delimiter parameter by making path an array
    getEntriesByPath(path: string, delimiter: string): any[] {
        let parts = path.split(delimiter);
        let firstMissingLevel;
        let firstMissingTitle;
        let currentObject = this;
        let entries;

        console.log('getEntriesByPath', parts);
        parts.forEach((part, index) => {
            if (currentObject) {
                currentObject = currentObject.findChildByTitle(part);
                if (currentObject) {
                    entries = currentObject.getChildren();
                } else {
                    firstMissingTitle = part;
                    firstMissingLevel = index + 1;
                }
            }
        });

        if (!firstMissingLevel) {
            return entries;
        } else {
            return [firstMissingLevel, firstMissingTitle];
        }
    }

    /**
     * [createEntryByPath Does not check for existence.
     * Use getEntriesByPath to find first missing level]
     *
     * @param  {string} path      [description]
     * @param  {string} delimiter [description]
     * @return {[type]}           [description]
     */
    createEntryByPath(entryOptions: any, path: string, delimiter: string) {
        let parts = path.split(delimiter);
        let parentContainer = this;

        parts.forEach(part => {
            parentContainer = parentContainer.findChildByTitle(part);
        });

        parentContainer.addChild(entryOptions);
    }

    editEntry(entryOptions: any, path: string, delimiter: string) {
        let uuid = entryOptions.uuid;
        let parts = path.split(delimiter);
        let parentContainer = this;

        parts.forEach(part => {
            parentContainer = parentContainer.findChildByTitle(part);
        });
        console.log('parent', parentContainer);
        let entry = parentContainer.findChildByUuid(uuid);
        console.log('entry', entry);
        entry.dateModified = new Date();
        entry.contents = entryOptions.contents;
    }
}
