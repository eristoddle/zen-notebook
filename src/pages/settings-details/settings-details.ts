import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';

//Electron
// /// <reference path="../../typings/globals/electron" />
//import { remote } from 'electron';

@Component({
    templateUrl: 'settings-details.html'
})
export class SettingsDetailsPage {

    selectedItem: any;
    uploadFile: any;
    showFileDialog: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.showFileDialog = this.selectedItem.fileDialog
    }

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }

    // openFile(){
    //     this.dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
    // }
}
