//Detect Platform
var os="Unknown ";
if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os="Mac";
if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";
var isNodeWebkit = (typeof process == "object");
var fileHandler = null;

//NW
if(isNodeWebkit) {
    //TODO: Create OS based modules that are injected into the application
    var gui = require('nw.gui');
    var win = gui.Window.get();
    if (os == 'Mac') {
        var nativeMenuBar = new gui.Menu({ type: "menubar" });
        try {
            nativeMenuBar.createMacBuiltin("Zen Notebook");
            win.menu = nativeMenuBar;
        } catch (ex) {

        }
    }
    fileHandler = 'nwDialog';
}

//Initialize Application
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', fileHandler])
    .run(function($rootScope, storageFactory){
        //OS
        $rootScope.os = os;
        //Active Component
        $rootScope.active_component = storageFactory.getStorage('component');
        if(!$rootScope.active_component){
            $rootScope.active_component = 'notebook';
        }
        //$rootScope.active_component = 'nanowrimo';
        $rootScope.active_component = 'notebook';
    });