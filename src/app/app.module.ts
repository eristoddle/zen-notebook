//Framework
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

//Third Party
import { Ng2Webstorage } from 'ng2-webstorage';

//Application
import { MyApp } from './app.component';

//Core Components
import { About } from '../pages/about/about';
import { Settings } from '../pages/settings/settings';
import { SettingsDetailsPage } from '../pages/settings-details/settings-details';
import { ZenHeader } from '../components/zen-header/zen-header';

import { contentEditableDirective } from '../components/contenteditable/contenteditable';
import { ZenSearch } from '../components/zen-search/zen-search';

import { CalendarService } from '../components/zen-datepicker/calendar-service';
import { StorageService } from '../providers/storage-service';
import { ContentService } from '../providers/content-service';
import { SettingsService } from '../providers/settings-service';
import { ElectronService } from '../providers/electron-service';
import { ApiService } from '../providers/api-service';

//TODO: Load these components dynamically from mode
import { ZenDatePicker } from '../components/zen-datepicker/zen-datepicker';
import { NotebookService } from '../pages/notebook-page/providers/notebook-service';

//Mode Components
import { NotebookPage } from '../pages/notebook-page/notebook-page';

@NgModule({
    declarations: [
        MyApp,
        About,
        NotebookPage,
        SettingsDetailsPage,
        Settings,
        ZenHeader,
        contentEditableDirective,
        ZenDatePicker,
        ZenSearch
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
        SettingsService,
        ElectronService,
        ApiService
    ]
})
export class AppModule { }
