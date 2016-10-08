import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello About Page');
  }

}
