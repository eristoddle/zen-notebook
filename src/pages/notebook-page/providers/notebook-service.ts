import { Injectable } from '@angular/core';

import { Notebook } from './../models/notebook.model'
import { StorageService } from '../../../providers/storage-service';

@Injectable()
export class NotebookService extends StorageService {

    notebook: Notebook;

    constructor() {
        super();
        //TODO: Think about this, the base service only deals with data agnostically
        //Where should notebook be instansiated
        //Maybe this should be a place for npm mixin to combine two base classes: Notebook and StorageService
        //Just thinking of the best pattern
        this.notebook = new Notebook();
    }
}
