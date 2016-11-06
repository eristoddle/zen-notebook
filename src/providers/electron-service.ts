declare var window: any;
import { Injectable } from '@angular/core';

@Injectable()
export class ElectronService {

    public active: boolean = false;
    public window: any;
    public fs: any;
    public electron: any;
    public dialog: any;
    public remote: any;

    constructor() {
        this.window = window;
        this.active = window.require ? true : false;
        console.log('electron active =', this.active);
        if (this.active) {
            this.fs = window.require('fs');
            this.electron = window.require('electron');
            this.remote = this.electron.remote;
            this.dialog = this.remote.dialog;
            console.log('electron', this.remote, this.dialog);
        }
    }

    close() {
        this.window.close();
    }

    showOpenFile() {
        this.dialog.showOpenDialog((fileNames) => {
            // fileNames is an array that contains all the selected
            if (fileNames === undefined) {
                console.log("No file selected");
            } else {
                this.openBinder(fileNames[0]);
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

    openBinder(filepath: string) {
        this.fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                alert("An error ocurred reading the file :" + err.message);
                return;
            }
            // Change how to handle the file content
            console.log("The file content is : " + data);
        });
    }

    saveBinder(data: any, path: string) {
        this.fs.writeFile(path, data, function(err) {
            if (err) {
                console.log("An error ocurred updating the file", err);
                return;
            }

            console.log("The file has been succesfully saved");
        });
    }
}
