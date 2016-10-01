//Framework
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

//Third Party

//Custom
import { MyApp } from './app.component';
import { Notebook } from '../pages/notebook/notebook';
import { ListPage } from '../pages/list/list';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ZenHeader } from '../components/zen-header/zen-header';
import { contentEditableDirective } from '../components/contenteditable/contenteditable';;
import { ZenDatePicker } from '../components/zen-datepicker/zen-datepicker';

@NgModule({
  declarations: [
    MyApp,
    Notebook,
    ItemDetailsPage,
    ListPage,
    ZenHeader,
    contentEditableDirective,
    ZenDatePicker
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //TODO: Check that I am doing the right thing here
  entryComponents: [
    MyApp,
    Notebook,
    ItemDetailsPage,
    ListPage,
    ZenHeader
  ],
  providers: [
  ]
})
export class AppModule {}
