import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { StorageService } from './storage-service';

@Injectable()
export class SettingsService {

    filePath: any;

    constructor(private http: Http, private storageService: StorageService) {
        this.filePath = {
            icon: 'folder',
            title: 'File Path',
            description: 'Location to store journal json file',
            value: '/Users/stemiller/Dropbox/Writing/ZenNotebook/newVersion.json',
            fileDialog: true,
            tempData: null
        };
    }

}
