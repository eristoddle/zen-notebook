import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//TODO: Maybe look at ForeRunner db in the future
import {LocalStorageService} from 'ng2-webstorage';
//TODO: Find a replacement or upgrade lz-string
//import LZString from 'lz-string';

@Injectable()
export class StorageService {

    private data: any;

    constructor(public http: Http, private storage: LocalStorageService) {

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
        return new Promise((resolve, reject) => {
            let file: File = inputValue.files[0];
            let path: string = inputValue.value;
            let fileReader = new FileReader();

            fileReader.onloadend = (e) => {
                resolve({
                    path: path,
                    result: fileReader.result
                });
            }

            fileReader.readAsText(file);
        });
    }

}
