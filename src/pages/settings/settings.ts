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
        fileDialog: boolean,
        tempData: any
    }>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {
        this.selectedItem = navParams.get('item');

        this.items = [];
        for (const key in this.settingsService) {
            let obj = this.settingsService[key];
            this.items.push(obj);
        }
    }

    itemTapped(event, item) {
        this.navCtrl.push(SettingsDetailsPage, {
            item: item
        });
    }
}
