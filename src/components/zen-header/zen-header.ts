declare var window: any;
import { Component } from '@angular/core';
import { StorageService } from '../../providers/storage-service';
import { SettingsService } from '../../providers/settings-service';

@Component({
    selector: 'zen-header',
    templateUrl: 'zen-header.html'
})
export class ZenHeader {

    public window: any;
    public fs: any;

    constructor(private storageService: StorageService, private settingsService: SettingsService) {
        this.window = window;
        try {
            this.fs = window.require('fs');
        }
        catch (e) {
            // statements to handle any exceptions
            console.log('fs require error', e); // pass exception object to error handler
        }
    }

    minimize() {
        this.window.minimize();
    }

    contract() {
        this.window.unmaximize();
    }

    expand() {
        this.window.maximize();
    }

    power() {
        let object = this.storageService.getObject('zen-data');
        let content = JSON.stringify(object);
        let filepath = this.settingsService.filePath.value;
        console.log('writing', filepath, content);
        this.fs.writeFile(filepath, content, function(err) {
            if (err) {
                console.log("An error ocurred updating the file", err);
                return;
            }

            console.log("The file has been succesfully saved");
            //this.window.close();
        });
    }
}
