//Framework
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

//Third Party
import { Ng2Webstorage } from 'ng2-webstorage';
//import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

//Application
import { MyApp } from './app.component';

//Electron
// /// <reference path="../../typings/globals/electron" />
// import { remote, ipcRenderer } from 'electron';

//Core Components
import { About } from '../pages/about/about';
import { Settings } from '../pages/settings/settings';
import { SettingsDetailsPage } from '../pages/settings-details/settings-details';
import { ZenHeader } from '../components/zen-header/zen-header';
import { contentEditableDirective } from '../components/contenteditable/contenteditable';
import { CalendarService } from '../components/zen-datepicker/calendar-service';
import { StorageService } from '../providers/storage-service';
import { ContentService } from '../providers/content-service';
import { SettingsService } from '../providers/settings-service';

//TODO: Load these components dynamically from mode
import { ZenDatePicker } from '../components/zen-datepicker/zen-datepicker';
import { NotebookService } from '../pages/notebook-page/providers/notebook-service';

//Mode Components
import { NotebookPage } from '../pages/notebook-page/notebook-page';

@NgModule({
    declarations: [
        //UPLOAD_DIRECTIVES,
        MyApp,
        About,
        NotebookPage,
        SettingsDetailsPage,
        Settings,
        ZenHeader,
        contentEditableDirective,
        ZenDatePicker
    ],
    imports: [
        Ng2Webstorage,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [
        IonicApp
    ],
    entryComponents: [
        MyApp,
        About,
        NotebookPage,
        SettingsDetailsPage,
        Settings,
        ZenHeader
    ],
    providers: [
        CalendarService,
        NotebookService,
        StorageService,
        ContentService,
        SettingsService
    ]
})
export class AppModule { }
