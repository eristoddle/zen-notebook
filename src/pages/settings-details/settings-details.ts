import { Component, ElementRef } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';
import { StorageService } from '../../providers/storage-service';

//TODO: loading a notebook file into the editor should be triggered
//by an event from the settings service. The default 'page' service
//i.e. notebookService, should listen for events from the settings servide
//and then load the file data into the editor context

@Component({
    templateUrl: 'settings-details.html'
})
export class SettingsDetailsPage {

    selectedItem: any;
    showFileDialog: boolean;
    public activePlatform: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService, private storageService: StorageService) {
        this.selectedItem = navParams.get('item');
        this.showFileDialog = this.selectedItem.fileDialog;
        this.activePlatform = storageService.activePlatform;
    }

    handleUpload($event): void {
        console.log('upload', $event);
        this.storageService.readFile($event.target)
            .then(results => {
                this.settingsService.setRawData(results);
            });
    }

}
