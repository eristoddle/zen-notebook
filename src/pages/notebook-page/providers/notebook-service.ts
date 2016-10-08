import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SecureStorage } from 'ionic-native';

import 'rxjs/add/operator/map';

import { Notebook } from './../models/notebook.model'

@Injectable()
export class NotebookService {
    data: any;
    notebook: Notebook;

    constructor(private http: Http) {
        this.notebook = new Notebook();
    }

    load() {
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }

        // don't have the data yet
        return new Promise(resolve => {
            this.http.get('path/to/data.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }
}
