angular.module('zenNodeWebkitModule', [])
    .factory('fileDialog', [function () {
        var fs = require('fs');
        var callDialog = function (dialog, callback) {
            dialog.addEventListener('change', function () {
                callback(dialog.value);
            }, false);
            dialog.click();
        };

        var dialogs = {};

        dialogs.saveAs = function (callback, defaultFilename, acceptTypes) {
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

        dialogs.openFile = function (callback, multiple, acceptTypes) {
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

        dialogs.openDir = function (callback) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            dialog.nwdirectory = 'nwdirectory';
            callDialog(dialog, callback);
        };

        dialogs.writeFile = function (filename, content) {
            return fs.writeFileSync(filename, content);
        };

        dialogs.readFile = function (file) {
            var data;
            try {
                data = fs.readFileSync(file);
                return data;
            } catch (e) {
                if (e.code === 'ENOENT') {
                    console.log('File not found!');
                } else {
                    throw e;
                }
                return false;
            }
        };

        dialogs.readDir = function(dir){
            var data;
            try {
                data = fs.readdirSync(dir);
                return data;
            } catch (e) {
                if (e.code === 'ENOENT') {
                    console.log('Directory not found!');
                } else {
                    throw e;
                }
                return false;
            }
        };

        return dialogs;
    }])
    .factory('updateFactory', ['$rootScope', function ($rootScope) {
        return {
            runUpdate: function () {
                //var gui = require('nw.gui');
                var pkg = require('./package.json');
                //TODO: This package is useless to me now unless it can self-update correctly
                var updater = require('node-webkit-updater');
                var upd = new updater(pkg);
                upd.checkNewVersion(function (error, newVersionExists, manifest) {
                    //$rootScope.version = gui.App.manifest.version;
                    $rootScope.update_available = newVersionExists;
                    //$rootScope.latest_version = manifest.version;
                });
            }
        };
    }])
    .run(function (updateFactory) {
        var gui = require('nw.gui');
        win = gui.Window.get();
        if (os == 'Mac') {
            var nativeMenuBar = new gui.Menu({ type: "menubar" });
            try {
                nativeMenuBar.createMacBuiltin("Zen Notebook");
                win.menu = nativeMenuBar;
            } catch (ex) {

            }
        }
        //TODO: I think Windows version has error if buzz is used
        if (os = "Windows") {
            mute = true;
        }
        updateFactory.runUpdate();
    });