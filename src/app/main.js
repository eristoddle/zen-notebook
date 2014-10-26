//TODO: Seperate node code from angular
var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
try {
    nativeMenuBar.createMacBuiltin("Zen Notebook");
    win.menu = nativeMenuBar;
} catch (ex) {

}
var fs = require('fs');

//Initialize Application
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', 'DWand.nw-fileDialog'])
    .run(function($rootScope, storageFactory){
        //OS
        $rootScope.os="Unknown ";
        if (navigator.appVersion.indexOf("Win")!=-1) $rootScope.os="Windows";
        if (navigator.appVersion.indexOf("Mac")!=-1) $rootScope.os="Mac";
        if (navigator.appVersion.indexOf("Linux")!=-1) $rootScope.os="Linux";

        //Active Component
        $rootScope.active_component = storageFactory.getStorage('component');
        if(!$rootScope.active_component){
            $rootScope.active_component = 'notebook';
        }
        //$rootScope.active_component = 'nanowrimo';
        $rootScope.active_component = 'notebook';
    });