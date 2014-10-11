//TODO: Replace local storage with service
//TODO: Sound as a service

//interact with content
zenNotebook.directive("contenteditable", ['$rootScope', 'notebookFactory', function ($rootScope, notebookFactory) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var write = function () {
                    var count = notebookFactory.countWords(element.html());
                    window.localStorage && window.localStorage.setItem('content', element.html());
                    window.localStorage && window.localStorage.setItem('word_count', count);
                },
                relaxSound = new buzz.sound("./assets/relax/rain.ogg", {loop: true, volume: 80}),
                typeSounds = {
                    spacebar: new buzz.sound("./assets/typewriter/spacebar.ogg", {volume: 60}),
                    keyup: new buzz.sound("./assets/typewriter/keyup.ogg", {volume: 100}),
                    bell: new buzz.sound("./assets/typewriter/bell.ogg", {volume: 100}),
                    carriage_return_main: new buzz.sound("./assets/typewriter/carriage-return-main.ogg", {volume: 100}),
                    carriage_return_stop: new buzz.sound("./assets/typewriter/carriage-return-stop.ogg", {volume: 100})
                },
            //http://buzz.jaysalvat.com/documentation/sound/
            //http://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/keyset.html
                typeSound = function (key_code) {
                    var clip;
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
                    typeSounds[sound].load();
                    typeSounds[sound].play();
                },
                relaxStart = function () {
                    relaxSound.load();
                    relaxSound.play();
                },
                relaxStop = function () {
                    relaxSound.stop();
                };
            element.bind("blur keyup change focus", function (event) {
                var theme = window.localStorage && window.localStorage.getItem('theme');
                scope.$apply(write);
                //console.log(event);
                if (event instanceof KeyboardEvent && (theme == 'typewriter light' || theme == 'carbon dark')) {
                    //console.log(event.keyIdentifier);
                    typeSound(event.keyIdentifier);
                }
                if (event instanceof FocusEvent && theme == 'relax dark') {
                    relaxStart();
                } else if (event instanceof FocusEvent && theme != 'relax dark') {
                    relaxStop();
                }
            });

            element.html(notebookFactory.onLoad());

            //TODO: This should come from the notebook component and ditch rootScope
            $rootScope.$on('changeDate', function (event, oldDate, newDate) {
                write();
                notebookFactory.setDaysContent(oldDate);
                if (notebookFactory.getDaysContent(newDate)) {
                    element.html(notebookFactory.getDaysContent(newDate));
                } else {
                    element.html('');
                }
                write();
            });
        }
    };
}]);