import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { ElectronConfig } from 'electron-config';
import 'rxjs/add/operator/map';

// import * as Config from 'electron-config';

@Injectable()
export class SettingsService {

  constructor(public http: Http) {
    console.log('Hello SettingsService Provider');
  }

}
