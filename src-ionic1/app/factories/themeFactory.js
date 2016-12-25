//handle theme change events
//uses buzz: http://buzz.jaysalvat.com/documentation/sound/
//reacts to keypress events: http://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/keyset.html
//TODO: I think Windows version has error if buzz is used, file path?
zenNotebook.factory('themeFactory', ['$rootScope', function ($rootScope) {
    var theme = window.localStorage && window.localStorage.getItem('theme');
    if (!theme) {
        theme = 'zen dark';
    }
    return {
        theme: theme,
        themes: {
            zen_dark: 'zen dark',
            zen_light: 'zen light',
            terminal: 'terminal courier',
            igcognito: 'incognito',
            typewriter: 'typewriter light',
            carbon: 'carbon dark',
            relax: 'relax dark'
        },
        relaxSound: new buzz.sound("./assets/relax/rain.ogg", {loop: true, volume: 80}),
        typeSounds: {
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
        themeSound: function (event) {
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