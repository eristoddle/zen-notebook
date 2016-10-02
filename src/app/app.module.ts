//Framework
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

//Third Party

//Custom
//TODO: Try to move as many as I can to components
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
