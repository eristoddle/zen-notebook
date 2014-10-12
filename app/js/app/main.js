//TODO: Seperate node code from angular
var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
try {
    nativeMenuBar.createMacBuiltin("Zen Notebook");
    win.menu = nativeMenuBar;
} catch (ex) {
    console.log(ex.message);
}
var fs = require('fs');

//Initialize Application
//https://github.com/ocombe/ocLazyLoad
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', 'DWand.nw-fileDialog'])
//    .config(function ($provide) {
//        angular.module('zenNotebook').service = $provide.service;
//        angular.module('zenNotebook').factory = $provide.factory;
//    })
    .run(function($rootScope, storageFactory){
        //$rootScope.active_component = 'notebook';
        $rootScope.active_component = storageFactory.getStorage('component');
    });