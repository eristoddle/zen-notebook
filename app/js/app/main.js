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
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', 'DWand.nw-fileDialog']);