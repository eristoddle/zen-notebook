import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//TODO: Maybe look at ForeRunner db in the future
import {LocalStorageService} from 'ng2-webstorage';
//TODO: Find a replacement or upgrade lz-string
//import LZString from 'lz-string';

import { ElectronService } from './electron-service';
import { ApiService } from './api-service';

@Injectable()
export class StorageService {

    private data: any;
    private persistant: any;
    public activePlatform: string;

    constructor(public http: Http, private storage: LocalStorageService, private electronService: ElectronService, private apiService: ApiService) {
        //TODO: Switch based on active service
        if (this.electronService.active) {
            this.persistant = electronService;
            this.activePlatform = 'electron';
        } else {
            this.persistant = apiService;
            this.activePlatform = 'api';
        }
        console.log('activePlatform', this.activePlatform);
    }

    setItem(key, value) {
        //value = LZString.compress(value);
        this.storage.store(key, value);
    }

    getItem(key) {
        var value = this.storage.retrieve(key);
        //value = LZString.decompress(value);
        return value;
    }

    setObject(key, object) {
        var value = JSON.stringify(object);
        //value = LZString.compress(value);
        this.storage.store(key, value);
    }

    getObject(key) {
        var value = this.storage.retrieve(key);
        //value = LZString.decompress(value);
        value = JSON.parse(value)
        return value;
    }

    removeItem(key) {
        this.storage.clear(key);
    }

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('path/to/data.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    readFile(inputValue: any): Promise<Object> {
        let file: File = inputValue.files[0];
        let path: string = inputValue.baseURI.replace('file:///', '');
        return this.persistant.openBinder(path, file);
    }

    saveBinder(data: any, path: string) {
        //this.persistant.saveBinder(data, path);
    }

}
