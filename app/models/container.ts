/// <reference path="./base.ts"/>
import {Base} from "./base";

export class Container extends Base{

    //TODO: Need to find a way to specify any class that inherits from base
    children: any[];

    constructor(){
        super();
    }
}
