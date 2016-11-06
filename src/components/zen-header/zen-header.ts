import { Component } from '@angular/core';
import { StorageService } from '../../providers/storage-service';
import { SettingsService } from '../../providers/settings-service';
import { ElectronService } from '../../providers/electron-service';

@Component({
    selector: 'zen-header',
    templateUrl: 'zen-header.html'
})
export class ZenHeader {

    constructor(private storageService: StorageService, private settingsService: SettingsService, private electronService: ElectronService) {
    }

    minimize() {
        this.electronService.window.minimize();
    }

    contract() {
        this.electronService.window.unmaximize();
    }

    expand() {
        this.electronService.window.maximize();
    }

    power() {
        let object = this.storageService.getObject('zen-data');
        let content = JSON.stringify(object);
        let filepath = this.settingsService.filePath.value;
        console.log('writing', filepath, content);
        //this.storageService.saveBinder(content, filepath);
    }
}
