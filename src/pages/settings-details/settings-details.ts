import { Component, ElementRef } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';

@Component({
    templateUrl: 'settings-details.html'
})
export class SettingsDetailsPage {

    selectedItem: any;
    showFileDialog: boolean;
    fileReader: FileReader = new FileReader();

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {
        this.selectedItem = navParams.get('item');
        console.log('selectedItem', this.selectedItem);
        this.showFileDialog = this.selectedItem.fileDialog
    }

    handleUpload($event): void {
        this.readFile($event.target);
    }

    readFile(inputValue: any): void {
        let file: File = inputValue.files[0];

        this.fileReader.onloadend = (e) => {
            console.log(this.fileReader.result);
        }

        this.fileReader.readAsText(file);
    }

}
