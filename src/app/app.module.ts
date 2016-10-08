//Framework
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

//Third Party

//Custom
//TODO: Try to move as many as I can to components
import { MyApp } from './app.component';
import { NotebookPage } from '../pages/notebook-page/notebook-page';
import { Settings } from '../pages/settings/settings';
import { SettingsDetailsPage } from '../pages/settings-details/settings-details';
import { ZenHeader } from '../components/zen-header/zen-header';
import { contentEditableDirective } from '../components/contenteditable/contenteditable';;
import { ZenDatePicker } from '../components/zen-datepicker/zen-datepicker';

@NgModule({
  declarations: [
    MyApp,
    NotebookPage,
    SettingsDetailsPage,
    Settings,
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
    NotebookPage,
    SettingsDetailsPage,
    Settings,
    ZenHeader
  ],
  providers: [
  ]
})
export class AppModule {}
