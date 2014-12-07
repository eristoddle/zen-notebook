angular.module('zenNodeWebkitModule', [])
    .factory('fileDialog', [function(){
        var fs = require('fs');
        var callDialog = function(dialog, callback) {
            dialog.addEventListener('change', function() {
                callback(dialog.value);
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

        dialogs.writeFile = function(filename, content){
            return fs.writeFileSync(filename, content);
        };

        dialogs.readFile = function(file){
            return fs.readFileSync(file);
        };

        return dialogs;
    }])
    .factory('updateFactory', [function(){
        var pkg = require('../package.json'); // Insert your app's manifest here
        var updater = require('node-webkit-updater');
        var upd = new updater(pkg);
        var copyPath, execPath;
        // Args passed when new app is launched from temp dir during update
        var runUpdate =function() {
            if (gui.App.argv.length) {
                // ------------- Step 5 -------------
                copyPath = gui.App.argv[0];
                execPath = gui.App.argv[1];

                // Replace old app, Run updated app from original location and close temp instance
                upd.install(copyPath, function (err) {
                    if (!err) {

                        // ------------- Step 6 -------------
                        upd.run(execPath, null);
                        gui.App.quit();
                    }
                });
            }
            else { // if no arguments were passed to the app

                // ------------- Step 1 -------------
                upd.checkNewVersion(function (error, newVersionExists, manifest) {
                    if (!error && newVersionExists) {

                        // ------------- Step 2 -------------
                        upd.download(function (error, filename) {
                            if (!error) {

                                // ------------- Step 3 -------------
                                upd.unpack(filename, function (error, newAppPath) {
                                    if (!error) {

                                        // ------------- Step 4 -------------
                                        upd.runInstaller(newAppPath, [upd.getAppPath(), upd.getAppExec()], {});
                                        gui.App.quit();
                                    }
                                }, manifest);
                            }
                        }, manifest);
                    }
                });
            }
        }
        return runUpdate;
    }])
    .run(function(updateFactory){
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
        if(os = "Windows"){
            mute = true;
        }
        //updateFactory();
    });