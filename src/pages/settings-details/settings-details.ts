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

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService, private storageService: StorageService) {
        this.selectedItem = navParams.get('item');
        //console.log('selectedItem', this.selectedItem);
        this.showFileDialog = this.selectedItem.fileDialog
    }

    handleUpload($event): void {
        this.storageService.readFile($event.target)
            .then(results => {
                console.log('upload results', results);
            });
    }

}
