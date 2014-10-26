//Detect Platform
var os="Unknown ";
if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os="Mac";
if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";
var isNodeWebkit = (typeof process == "object");
var fileHandler = null;

//NW
if(isNodeWebkit) {
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

    //Node
    var fs = require('fs');
    angular.module('fileDialog', [])
        .factory('fileDialog', [function(){
            var callDialog = function(dialog, callback) {
                dialog.addEventListener('change', function() {
                    var result = dialog.value;
                    callback(result);
                }, false);
                dialog.click();
            };

            var dialogs = {};

            dialogs.saveAs = function(callback, defaultFilename, acceptTypes) {
                var dialog = document.createElement('input');
                dialog.type = 'file';
                dialog.nwsaveas = defaultFilename || '';
                if (angular.isArray(acceptTypes)) {
                    dialog.accept = acceptTypes.join(',');
                } else if (angular.isString(acceptTypes)) {
                    dialog.accept = acceptTypes;
                }
                callDialog(dialog, callback);
            };

            dialogs.openFile = function(callback, multiple, acceptTypes) {
                var dialog = document.createElement('input');
                dialog.type = 'file';
                if (multiple === true) {
                    dialog.multiple = 'multiple';
                }
                if (angular.isArray(acceptTypes)) {
                    dialog.accept = acceptTypes.join(',');
                } else if (angular.isString(acceptTypes)) {
                    dialog.accept = acceptTypes;
                }
                callDialog(dialog, callback);
            };

            dialogs.openDir = function(callback) {
                var dialog = document.createElement('input');
                dialog.type = 'file';
                dialog.nwdirectory = 'nwdirectory';
                callDialog(dialog, callback);
            };

            return dialogs;
        }]);
    fileHandler = 'fileDialog';
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