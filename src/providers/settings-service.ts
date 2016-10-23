import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService {

    filePath: any;

    constructor(public http: Http) {
        this.filePath = {
            icon: 'folder',
            title: 'File Path',
            description: 'Location to store journal json file',
            value: '/Users/stemiller/Dropbox/Writing/ZenNotebook/newVersion.json',
            fileDialog: true
        };
    }

}
