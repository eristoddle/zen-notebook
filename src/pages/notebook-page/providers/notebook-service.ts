import { Injectable } from '@angular/core';

import { Notebook } from './../models/notebook.model'
import { StorageService } from '../../../providers/storage-service';

@Injectable()
export class NotebookService extends StorageService {

    notebook: Notebook;

    constructor() {
        super();
        this.notebook = new Notebook();
    }
}
