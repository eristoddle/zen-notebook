zenNotebook.factory('menuFactory', ['$rootScope', 'fileDialog', 'notebookFactory', function ($rootScope, fileDialog, notebookFactory) {
    var factory = notebookFactory,
        component_nav = factory.getMenu(),
        app_nav = [
            {title: 'Export', action: 'export', class: 'icon-repo', sub: 'foot'},
            {title: 'Theme', action: 'theme', class: 'icon-yingyang', sub: 'body'},
            {title: 'Settings', action: 'settings', class: 'icon-gear', sub: 'foot'},
            {title: 'About', action: 'about', class: 'icon-info', sub: 'foot'},
            {title: 'Minimize', action: 'minimize', class: 'icon-resize2', sub: 'nw'},
            {title: 'Maximize', action: 'maximize', class: 'icon-resize', sub: 'nw'},
            {title: 'Exit', action: 'exit', class: 'icon-switch', sub: 'nw'}
        ],
        nav = component_nav.concat(app_nav);

    return {
        message: null,
        menus: {
            foot: {
                about: {
                    heading: 'About Zen Notebook',
                    body: '<p>Zen Notebook is a minimalist notebook inspired by <a rel="external" href="http://github.com/tholman/zenpen">Zenpen</a> and ' +
                        '<a href="http://rednotebook.sourceforge.net" target="_blank">RedNotebook</a></p>' +
                        '<p>Created by <a href="http://stephanmiller.com" target="_blank">Stephan Miller</a></p>' +
                        '<p><a href="http://zen-notebook.com">Home Page</a></p>'
                },
                settings: {
                    heading: 'Configuration',
                    body: '//TODO: Configuration Options'
                },
                export: {
                    heading: 'Export',
                    buttons: [
                        {title: 'Export', class: 'export', sub: 'nw', action: 'export'}
                    ]
                }
            },
            nav: nav
        },
        publishClick: function (message) {
            this.message = message;
            if (message.sub == 'left') {
                $rootScope.$broadcast('toggleLeft');
            }
            if (message.sub == 'foot') {
                $rootScope.$broadcast('toggleFoot');
            }
            if (message.sub == 'body') {
                $rootScope.$broadcast('body');
            }
            if (message.sub == 'nw') {
                if (message.action == 'maximize') {
                    win.toggleFullscreen();
                }
                if (message.action == 'minimize') {
                    win.minimize();
                }
                if (message.action == 'exit') {
                    factory.onExit();
                    win.close();
                }
            }
        },
        subscribeClick: function () {
            var message = this.message;
            this.message = null;
            return message;
        }
    };
}]);

//http://buzz.jaysalvat.com/documentation/sound/
//http://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/keyset.html
zenNotebook.factory('themeFactory', ['$rootScope', function($rootScope){
    return {
        theme : window.localStorage && window.localStorage.getItem('theme'),
        relaxSound : new buzz.sound("./assets/relax/rain.ogg", {loop: true, volume: 80}),
        typeSounds : {
            spacebar: new buzz.sound("./assets/typewriter/spacebar.ogg", {volume: 60}),
            keyup: new buzz.sound("./assets/typewriter/keyup.ogg", {volume: 100}),
            bell: new buzz.sound("./assets/typewriter/bell.ogg", {volume: 100}),
            carriage_return_main: new buzz.sound("./assets/typewriter/carriage-return-main.ogg", {volume: 100}),
            carriage_return_stop: new buzz.sound("./assets/typewriter/carriage-return-stop.ogg", {volume: 100})
        },
        typeSound: function (key_code) {
            //Shift
            if (key_code == 'U+0051') {
                sound = 'spacebar';
                //Alt
            } else if (key_code == 'Alt') {
                sound = 'spacebar';
                //Caps Lock
            } else if (key_code == 'CapsLock') {
                sound = 'spacebar';
                //Space
            } else if (key_code == 'U+0020') {
                sound = 'spacebar';
                //Enter
            } else if (key_code == 'Enter') {
                sound = 'carriage_return_main';
                sound = 'carriage_return_stop';
                //Tab
            } else if (key_code == 'U+0009') {
                //sound = 'keyup';
                //sound = 'spacebar';
                sound = 'bell';
                //Backspace - Delete
            } else if (key_code == 'U+0008') {
                sound = 'spacebar';
                //Up Arrow
            } else if (key_code == 'Up') {
                sound = 'spacebar';
                //Down Arrow
            } else if (key_code == 'Down') {
                sound = 'spacebar';
                //Left Arrow
            } else if (key_code == 'Left') {
                sound = 'spacebar';
                //Right Arrow
            } else if (key_code == 'Right') {
                sound = 'spacebar';
            } else {
                sound = 'keyup';
            }
            this.typeSounds[sound].load();
            this.typeSounds[sound].play();
        },
        relaxStart: function () {
            this.relaxSound.load();
            this.relaxSound.play();
        },
        relaxStop: function () {
            this.relaxSound.stop();
        },
        themeSound: function(event){
            var theme = window.localStorage && window.localStorage.getItem('theme');
            if (event instanceof KeyboardEvent && (theme == 'typewriter light' || theme == 'carbon dark')) {
                this.typeSound(event.keyIdentifier);
            }
            if (event instanceof FocusEvent && theme == 'relax dark') {
                this.relaxStart();
            } else if (event instanceof FocusEvent && theme != 'relax dark') {
                this.relaxStop();
            }
        }
    }
}]);

zenNotebook.factory('storageFactory', ['$rootScope', function ($rootScope) {
    return {
        getStorage: function(key, component){
            if(component){
                key = 'component-' + key;
            }
            return window.localStorage.getItem(key);
        },
        setStorage: function(key, data, component){
            if(component){
                key = 'component-' + key;
            }
            window.localStorage.setItem(key, data);
        }
    }
}])