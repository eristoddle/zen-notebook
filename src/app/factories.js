//a global bus for clicks I guess
//adds nav menu buttons from component
//broadcasts messages to the controllers down the $rootScope
//TODO: could be replaced with a proper router?
//could be handle by the body controller?
//early implementation while learning angular that worked, so I haven't done the research to fix it
zenNotebook.factory('menuFactory', ['$rootScope', '$injector', function ($rootScope, $injector) {
    var app_nav = [
            {title: 'Export', action: 'export', class: 'fa fa-download', sub: 'foot'},
            {title: 'Theme', action: 'theme', class: 'fa fa-adjust', sub: 'body'},
            {title: 'Settings', action: 'settings', class: 'fa fa-gears', sub: 'foot'},
            {title: 'About', action: 'about', class: 'fa fa-question', sub: 'foot'},
            {title: 'Minimize', action: 'minimize', class: 'fa fa-arrow-down', sub: 'nw'},
            {title: 'Maximize', action: 'maximize', class: 'fa fa-arrows-alt', sub: 'nw'},
            {title: 'Exit', action: 'exit', class: 'fa fa-power-off', sub: 'nw'}
        ];

    var menus = {
        message: null,
        menus: null,
        factory: null,
        loadComponent: function(){
            this.factory = $injector.get($rootScope.active_component + 'Factory');
            var component_nav = this.factory.getMenu();
            this.menus = {
                nav: component_nav.concat(app_nav)
            }
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
                    this.factory.onExit();
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

    menus.loadComponent();

    return menus;
}]);

//handle theme change events
//uses buzz: http://buzz.jaysalvat.com/documentation/sound/
//reacts to keypress events: http://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/keyset.html
//TODO: I think Windows version has error if buzz is used, file path?
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

//handles non-file data storage
//TODO: should this handle file storage also?
//TODO: this needs to switch based on the platform because localStorage won't fly for all
zenNotebook.factory('storageFactory', ['$rootScope', function ($rootScope) {
    return {
        getStorage: function(key, component){
            if(component){
                key = component + '.' + key;
            }
            return window.localStorage.getItem(key);
        },
        setStorage: function(key, data, component){
            if(component){
                key = component + '.' + key;
            }
            window.localStorage.setItem(key, data);
        }
    }
}]);

zenNotebook.factory('dropboxFactory', ['$rootScope', function ($rootScope) {
    return {

    }
}]);