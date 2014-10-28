//Detect Platform
var os="Unknown ";
if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os="Mac";
if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";
var isNodeWebkit = (typeof process == "object");
var fileHandler = null;
var mute = false;

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
    //TODO: I think Windows version has error if buzz is used
    if(os = "Windows"){
        mute = true;
    }
    fileHandler = 'nwDialog';
}else{
    fileHandler = 'webDialog';
}

//Initialize Application
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', fileHandler])
    .run(function($rootScope, storageFactory){
        //Sound
        $rootScope.mute = mute;
        if(storageFactory.getStorage('mute')){
            $rootScope.mute = storageFactory.getStorage('mute');
        }
        //Active Component
        $rootScope.active_component = storageFactory.getStorage('component');
        if(!$rootScope.active_component){
            $rootScope.active_component = 'notebook';
        }
        //$rootScope.active_component = 'nanowrimo';
        $rootScope.active_component = 'notebook';
    });