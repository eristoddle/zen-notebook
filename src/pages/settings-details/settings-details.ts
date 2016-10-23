import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';

@Component({
    templateUrl: 'settings-details.html'
})
export class SettingsDetailsPage {

    selectedItem: any;
    uploadFile: any;
    showFileDialog: boolean;
    options: Object = {
        url: 'http://localhost:10050/upload'
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.showFileDialog = this.selectedItem.fileDialog
    }

    handleUpload(data): void {
        console.log('handleUpload', data);
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }
    
}
