import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
    selector: 'item-details'
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
    selectedItem: any;

    constructor(private nav: NavController, navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
}