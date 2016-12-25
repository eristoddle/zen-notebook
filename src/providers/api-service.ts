import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    public active: boolean = false;

    constructor() {
        if (this.active) {

        }
    }

    close() {

    }

    showOpenFile() {

    }

    showOpenDirectory() {

    }

    openBinder(path: string, file: any) {
        return new Promise((resolve, reject) => {
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

    saveBinder(data: any, path: string) {
        //TODO: web api
    }
}
