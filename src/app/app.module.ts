import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, ionicBootstrap } from 'ionic-angular';
import { MyApp } from './app.component';

//TODO: Ionic 2 Beta 12, then Angular 2 RC 5 with NgModule, then I can add this.
//import {DynamicComponentModule} from 'angular2-dynamic-component/index';

import {Notebook} from '../pages/notebook/notebook';
import {ListPage} from '../pages/list/list';


@NgModule({
  declarations: [
    MyApp,
    Notebook,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Notebook,
    ListPage
  ],
  providers: []
})
export class AppModule {}
