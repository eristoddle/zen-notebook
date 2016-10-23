import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SettingsDetailsPage } from '../settings-details/settings-details';
import { SettingsService } from '../../providers/settings-service';


@Component({
    templateUrl: 'settings.html'
})
export class Settings {
    selectedItem: any;
    items: Array<{
        title: string,
        note: string,
        icon: string,
        value: any,
        fileDialog: boolean
    }>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        this.items = [];
        for (const key in this.settingsService) {
            let obj = this.settingsService[key];
            this.items.push({
                title: obj.title,
                note: obj.description,
                icon: obj.icon,
                value: obj.value,
                fileDialog: obj.fileDialog
            });
        }
    }

    itemTapped(event, item) {
        this.navCtrl.push(SettingsDetailsPage, {
            item: item
        });
    }
}
