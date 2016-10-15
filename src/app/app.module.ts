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

//TODO: Load these components dynamically from mode
import { ZenDatePicker } from '../components/zen-datepicker/zen-datepicker';

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
        ZenDatePicker
    ],
    imports: [
        Ng2Webstorage,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        About,
        NotebookPage,
        SettingsDetailsPage,
        Settings,
        ZenHeader
    ],
    providers: [
    ]
})
export class AppModule { }
