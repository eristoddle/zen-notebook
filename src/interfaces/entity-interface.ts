/**
 * Base interfase for all classes
 */
export interface Entity {

    /**
     * Thinking forward on modifying schema or database dynamically
     * To remap to a different schema structure
     * See model and type
     * @type {string}
     */
    uuid: string;
    /**
     * Display Name of Entity type
     * Examples: Novel, Notebook, Nanowrimo Novel, Chapter, Scene
     * Used in UI
     * @type {string}
     */
    alias: string;
    title: string;
    description: string;
    dateCreated: Date;
    dateModified: Date;
    children: any[];
    parentUuid: string;
    /**
     * Any custom keys for the final class live here
     * @type {any}
     */
    customMeta: any;
    sortOrder: number;
    /**
     * Level in heirarchy of Binder
     * The Binder level is locked on 0
     * @type {number}
     */
    level: number;
    /**
     * Base model class
     * Thinking ahead for possible usefulness in rearranging the data structure
     * and database type (relational vs nosql)
     * May have to use type if I can't abstract away enough
     * @type {string}
     */
    model: string
    /**
     * Final class of Entity
     * Machine Name version of alias above
     * For future schema a database flexibility
     * @type {string}
     */
    type: string;

}
