declare var _window: any;
import { Injectable } from '@angular/core';

@Injectable()
export class ElectronService {

    public active: boolean = false;
    public _window: any;
    public fs: any;
    public electron: any;
    public dialog: any;
    public remote: any;

    constructor() {
        this._window = window;
        this.active = this._window.require ? true : false;
        if (this.active) {
            this.fs = this._window.require('fs');
            this.electron = this._window.require('electron');
            this.remote = this.electron.remote;
            this.dialog = this.remote.dialog;
        }
    }

    close() {
        this._window.close();
    }

    minimize() {
        this._window.minimize();
    }

    contract() {
        this._window.unmaximize();
    }

    expand() {
        this._window.maximize();
    }

    openBinder() {
        return this.dialog.showOpenDialog((fileNames) => {
            // fileNames is an array that contains all the selected
            if (fileNames === undefined) {
                console.log("No file selected");
            } else {
                return this.processBinder(fileNames[0]);
            }
        });
    }

    showOpenDirectory() {
        this.dialog.showOpenDialog({
            title: "Select a folder",
            properties: ["openDirectory"]
        }, (folderPaths) => {
            // folderPaths is an array that contains all the selected paths
            if (folderPaths === undefined) {
                console.log("No destination folder selected");
                return;
            } else {
                console.log(folderPaths);
            }
        });
    }

    processBinder(filepath: string) {
        return new Promise((resolve, reject) => {
            this.fs.readFile(filepath, 'utf-8', (err, data) => {
                if (err) {
                    alert("An error ocurred reading the file :" + err.message);
                    reject(err);
                }
                console.log("The file content is : " + data);
                resolve(data);
            });
        });
    }

    saveBinder(data: any, path: string) {
        return new Promise((resolve, reject) => {
            this.fs.writeFile(path, data, function(err) {
                if (err) {
                    console.log("An error ocurred updating the file", err);
                    reject(err);
                }
                console.log("The file has been succesfully saved");
                resolve();
            });
        });
    }
}
