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

/*
 Services
 */

//The specializes module functions
//notebook
zenNotebook.factory('notebookFactory', ['$rootScope', function ($rootScope) {
    var notebook = {
        years: {},
        file: null,
        currentDate: null,
        activeDate: null,
        activeDateText: function () {
            return this.activeYear + '-' + this.activeMonth + '-' + this.activeDay
        },
        activeYear: null,
        activeMonth: null,
        activeDay: null,
        getDaysContent: function (dateText) {
            dates = dateText.split('-');
            try {
                return this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                window.localStorage && window.localStorage.setItem('error', err);
                return '';
            }
        },
        setDaysContent: function (dateText) {
            if (this.getActiveContent().length > 0) {
                dates = dateText.split('-');
                if (!this.years[parseInt(dates[0])][parseInt(dates[1]) + 1]) {
                    this.years[parseInt(dates[0])][parseInt(dates[1]) + 1] = {};
                }
                if (this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]) {
                    this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['content'] = this.getActiveContent();
                    this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['word_count'] = this.countWords(this.getActiveContent());
                } else {
                    this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])] = {};
                    this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['content'] = this.getActiveContent();
                    this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['word_count'] = this.countWords(this.getActiveContent());
                }
            }
        },
        setActiveDate: function (rawDate, offset) {
            var date;
            if (offset == null) {
                offset = 1;
            }
            if (rawDate instanceof Date) {
                date = rawDate;
            } else {
                date = new Date(rawDate);
            }
            this.activeDate = date;
            this.activeMonth = this.activeDate.getMonth() + offset;
            this.activeYear = this.activeDate.getFullYear();
            this.activeDay = this.activeDate.getDate();
            if (!this.years[this.activeYear]) {
                this.years[this.activeYear] = {};
            }
            if (!this.years[this.activeYear][this.activeMonth]) {
                this.years[this.activeYear][this.activeMonth] = {};
            }
            if (!this.years[this.activeYear][this.activeMonth][this.activeDay]) {
                this.years[this.activeYear][this.activeMonth][this.activeDay] = {};
            }
        },
        //TODO:Parse before saving
        getActiveContent: function () {
            return window.localStorage.getItem('content')
                .replace(/<br>/g, "\n")
                .replace(/<div>/g, "\n")
                .replace(/<\/div>/g, "")
        },
        countWords: function (s) {
            s = s.replace(/(^\s*)|(\s*$)/gi, "");
            s = s.replace(/[ ]{2,}/gi, " ");
            s = s.replace(/\n /, "\n");
            return s.split(' ').length;
        },
        activeTags: '',
        saveNotebook: function (filename) {
            var journal;
            this.file = filename;
            this.setDaysContent(this.activeDateText());
            journal = JSON.stringify(this);
            try {
                fs.writeFileSync(filename, journal);
                window.localStorage && window.localStorage.setItem('file', this.file);
            } catch (err) {
                console.log(err);
                window.localStorage && window.localStorage.setItem('error', err);
                window.localStorage && window.localStorage.setItem('recovery', journal);
            }
        },
        autoSaveNotebook: function () {
            var file = window.localStorage && window.localStorage.getItem('file');
            if (file) {
                this.setDaysContent(this.activeDateText());
                this.saveNotebook(file);
            } else {
                //TODO: Warning of lost data
            }
        },
        loadNotebook: function (file) {
            var data = fs.readFileSync(file);
            tempJournal = JSON.parse(data);
            this.file = file;
            this.currentDate = new Date();
            this.activeMonth = this.activeMonth - 1;
            this.years = tempJournal.years;
            window.localStorage && window.localStorage.setItem('file', this.file);
        },
        //TODO: Only works without tags or categories
        importRedNotebook: function (dir) {
            var re = new RegExp(/(\d{1,2}): {text: ([^}]*)}\n/g),
                files = fs.readdirSync(dir),
                match,
                data,
                json,
                newJson;
            for (i = 0; i < files.length; i++) {
                var fileparts = files[i].split('.');
                var filedates = fileparts[0].split('-');
                if (!(filedates[0] in this.years)) {
                    this.years[parseInt(filedates[0])] = {};
                }
                if (!(filedates[1] in this.years[filedates[0]])) {
                    this.years[parseInt(filedates[0])][parseInt(filedates[1])] = {};
                }
                data = fs.readFileSync(dir + '/' + files[i]);
                json = {};
                newJson = {};
                while ((match = re.exec(data)) !== null) {
                    json[match[1]] = match[2].replace(/['"]+/g, '');
                }
                for (var date in json) {
                    newJson[date] = {};
                    newJson[date]['content'] = json[date];
                }
                this.years[parseInt(filedates[0])][parseInt(filedates[1])] = newJson;
            }
        }
    };
    if (!notebook.currentDate) {
        notebook.currentDate = new Date();
    }
    if (!notebook.activeDate) {
        notebook.setActiveDate(notebook.currentDate);
    }
    return notebook;
}]);

//TODO: Modularize how markup is built
//Configuration will load new menu items from plugins
//handle clicks
zenNotebook.factory('menuFactory', ['$rootScope', 'fileDialog', 'notebookFactory', function ($rootScope, fileDialog, notebookFactory) {
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
                notebook: {
                    heading: 'Notebooks',
                    buttons: [
                        {title: 'Open Notebook', class: 'open', sub: 'nw', action: 'open'},
                        {title: 'Save Notebook', class: 'save', sub: 'nw', action: 'save'},
                        {title: 'Import Red Notebook', class: 'import', sub: 'nw', action: 'import'}
                    ]
                }
            },
            nav: [
                {title: 'Theme', action: 'theme', class: 'icon-yingyang', sub: 'global'},
                {title: 'Calendar', action: 'calendar', class: 'icon-calendar', sub: 'left'},
                {title: 'Notebook', action: 'notebook', class: 'icon-repo', sub: 'foot'},
                {title: 'Settings', action: 'settings', class: 'icon-gear', sub: 'foot'},
                {title: 'About', action: 'about', class: 'icon-info', sub: 'foot'},
                {title: 'Minimize', action: 'minimize', class: 'icon-resize2', sub: 'nw'},
                {title: 'Maximize', action: 'maximize', class: 'icon-resize', sub: 'nw'},
                {title: 'Close', action: 'close', class: 'icon-switch', sub: 'nw'}
            ]
        },
        publishClick: function (message) {
            this.message = message;
            if (message.sub == 'left') {
                $rootScope.$broadcast('toggleLeft');
            }
            if (message.sub == 'foot') {
                $rootScope.$broadcast('toggleFoot');
            }
            if (message.sub == 'nw') {
                if (message.action == 'open') {
                    fileDialog.openFile(
                        function (filename) {
                            notebookFactory.loadNotebook(filename);
                        },
                        false,
                        '.json'
                    );
                }
                if (message.action == 'save') {
                    fileDialog.saveAs(
                        function (filename) {
                            notebookFactory.saveNotebook(filename);
                        },
                        'notebook.json',
                        '.json'
                    );
                }
                if (message.action == 'import') {
                    fileDialog.openDir(function (dir) {
                        notebookFactory.importRedNotebook(dir);
                    });
                }
                if (message.action == 'maximize') {
                    win.toggleFullscreen();
                }
                if (message.action == 'minimize') {
                    win.minimize();
                }
                if (message.action == 'close') {
                    notebookFactory.autoSaveNotebook();
                    win.close();
                }
            }
            if (message.sub == 'global') {
                $rootScope.$broadcast('global');
            }
        },
        subscribeClick: function () {
            var message = this.message;
            this.message = null;
            return message;
        }
    };
}]);

zenNotebook.factory('calendarFactory', ['$rootScope', 'notebookFactory', function ($rootScope, notebookFactory) {
    return {
        monthNames: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
        days: ['s', 'm', 't', 'w', 't', 'f', 's'],
        daysInMonth: function (date) {
            var isLeapYear = function (year) {
                return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
            };
            return [31, (isLeapYear(date.getYear()) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
        },
        formatDateHeading: function (date) {
            var m = this.monthNames[date.getMonth()];
            return m.charAt(0).toUpperCase() + m.slice(1) + ' ' + date.getFullYear();
        },
        currentDate: new Date(),
        getTemplate: function (month, year, dates) {
            var month = ((isNaN(month) || month == null) ? this.currentDate.getMonth() + 1 : month) - 1,
                year = (isNaN(year) || year == null) ? this.currentDate.getFullYear() : year,
                firstDay = new Date(
                    year, month, 1),
                startDay = firstDay.getDay(),
                monthLength = this.daysInMonth(firstDay),
                heading = this.formatDateHeading(firstDay),
                tpl = [
                    '<div id="cal" class="cal">',
                    '<table class="cal">',
                        '<tr><th colspan="7">' + heading + '</th></tr>',
                    '<tr>'],
                day = 1,
                rows = Math.ceil((monthLength + startDay) / 7);
            if (!dates || !dates.length) dates = [this.currentDate.getDate()];
            this.days.forEach(function (day) {
                tpl.push('<td class="cal-head">' + day.toUpperCase() + '</td>');
            });
            tpl.push('</tr>');
            for (var i = 0; i < rows; i++) {
                var row = ['<tr>'];
                for (var j = 0; j < 7; j++) {
                    row.push('<td>');
                    if (day <= monthLength && (i > 0 || j >= startDay)) {
                        var date = year + '-' + month + '-' + day;
                        if (dates.indexOf(day) == -1) {
                            //TODO: Have a today custom class
                            //TODO: This check doesn't work on first load - need a notebook init function
                            if(notebookFactory.getDaysContent(date).length != null){
                                row.push('<div class="cal-day cal-content" data-date="' + date +
                                    '" data-month=' + month + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                            }else {
                                row.push('<div class="cal-day" data-date="' + date +
                                    '" data-month=' + month + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                            }
                        }else{
                            row.push('<div class="cal-day cal-highlight" data-date="' + date +
                                '" data-month=' + month + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                        }
                        row.push(day + '</div>');
                        day++;
                    }
                    row.push('</td>');
                }
                row.push('</tr>');
                tpl.push(row.join(''));
            }
            tpl.push('</table><div class="navigation"><span class="icon-triangle-left" data-month=' + (month - 1) + ' data-action="month-back" changedate></span>' +
                '<span class="today" data-month=' + month + ' data-day=' + this.currentDate.getDate() + ' data-year=' + year + ' data-action="set-date" changedate>Today</span>' +
                '<span class="icon-triangle-right" data-month=' + (month + 1) + 'data-action="month-forward" changedate></span></div></div>');
            return tpl.join('');
        }
    }
}]);

/*
 Controllers
 */

zenNotebook.controller('NavController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    //TODO: Load this from a config file
    var message = menuFactory.subscribeClick();
    $scope.menu = menuFactory.menus.nav;
    $scope.expr = function (locals) {
        menuFactory.publishClick(locals);
    }
}]);

zenNotebook.controller('BodyController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.themes = {
        zen_dark: 'zen dark',
        zen_light: 'zen light',
        terminal: 'terminal courier',
        igcognito: 'incognito',
        typewriter: 'typewriter light',
        carbon: 'carbon dark',
        relax: 'relax dark'
    };
    /*TODO: Implement theming system where there are classes in the template indicating
     where a theme class has to be applied: theme-font, theme-main-color, theme-text-color
     */
    $scope.theme = window.localStorage && window.localStorage.getItem('theme');
    if (!$scope.theme) {
        $scope.theme = 'zen dark';
    }
    $scope.count = 0;

    $scope.$on('global', function () {
        var message = menuFactory.subscribeClick(),
            nextCount,
            rowCount = 0;
        if ($scope.count == 7) {
            $scope.count = 0;
        }
        nextCount = $scope.count + 1;
        if (message.action == 'theme') {
            for (var key in $scope.themes) {
                rowCount = rowCount + 1;
                if (rowCount == nextCount) {
                    $scope.theme = $scope.themes[key];
                    window.localStorage && window.localStorage.setItem('theme', $scope.theme);
                    $scope.count = $scope.count + 1;
                    return;
                }
            }
        }
    });
}]);

zenNotebook.controller('LeftController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.$on('toggleLeft', function () {
        var message = menuFactory.subscribeClick();
        $scope.leftChangeClass = !$scope.leftChangeClass;
        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        }
    });
}]);

//TODO: Modularize how markup is built
zenNotebook.controller('FootController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.$on('toggleFoot', function () {
        var message = menuFactory.subscribeClick(),
            menus = menuFactory.menus.foot,
            menu = menus[message.action];
        $scope.footChangeClass = !$scope.footChangeClass;
        if (menu) {
            $scope.heading = menu.heading;
            $scope.body = menu.body;
            $scope.buttons = menu.buttons;
        }

        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        }
    });
}]);

/*
 Directives
 */

//Load content from local storage
zenNotebook.directive('ngElementReady', ['notebookFactory', function (notebookFactory) {
    return {
        priority: -1000,
        restrict: "A",
        link: function ($scope, $element, $attributes) {
            //var mode = window.localStorage && window.localStorage.getItem('mode');
            //var recovery = window.localStorage && window.localStorage.getItem('recovery');
            var file = window.localStorage && window.localStorage.getItem('file');

            if (file) {
                notebookFactory.loadNotebook(file);
                window.localStorage && window.localStorage.setItem(
                    'content',
                    notebookFactory.getDaysContent(notebookFactory.activeDateText())
                );
            } else {
                notebookFactory.setActiveDate(notebook.currentDate);
                this.activeMonth = this.activeMonth - 1;
            }

            $element.html(notebookFactory.getDaysContent(notebookFactory.activeDateText()));
        }
    };
}]);

//store content in local storage
zenNotebook.directive("contenteditable", ['$rootScope', 'notebookFactory', function ($rootScope, notebookFactory) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var write = function () {
                    var count = notebookFactory.countWords(element.html());
                    window.localStorage && window.localStorage.setItem('content', element.html());
                    window.localStorage && window.localStorage.setItem('word_count', count);
                    $rootScope.$broadcast('changeWordcount', count);
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
                relaxStart = function(){
                    relaxSound.load();
                    relaxSound.play();
                }
                relaxStop = function(){
                    relaxSound.stop();
                };
            element.bind("blur keyup change focus", function (event) {
                var theme = window.localStorage && window.localStorage.getItem('theme');
                scope.$apply(write);
                //console.log(event);
                if (event instanceof KeyboardEvent && (theme == 'typewriter light' || theme == 'carbon dark')){
                    //console.log(event.keyIdentifier);
                    typeSound(event.keyIdentifier);
                }
                if (event instanceof FocusEvent && theme == 'relax dark'){
                    relaxStart();
                }else if(event instanceof FocusEvent && theme != 'relax dark'){
                    relaxStop();
                }
            });

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

//calendar
zenNotebook.directive('calendar', ['$compile', 'calendarFactory', function ($compile, calendarFactory) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, element, attrs) {
            element.html(calendarFactory.getTemplate());
            $compile(element.contents())(scope);
        }
    };
}]);

//calendar click event
zenNotebook.directive("changedate", ['$rootScope', '$compile', 'calendarFactory', 'notebookFactory', function ($rootScope, $compile, calendarFactory, notebookFactory) {
    return function (scope, element, attrs) {
        //TODO: Clicking today should clear content if none exists
        element.bind("click", function () {
            if (attrs.action == 'set-date') {
                $rootScope.$broadcast('changeDate', notebookFactory.activeDateText(), attrs.date);
                notebookFactory.setActiveDate(attrs.date);
            }
            angular.element(
                document.getElementById('cal'))
                .replaceWith($compile(calendarFactory.getTemplate(parseInt(attrs.month) + 1, parseInt(attrs.year), [parseInt(attrs.day)]))(scope)
            );
        });
    };
}]);

//stats
zenNotebook.directive('stats', ['$compile', '$rootScope', function ($compile, $rootScope) {
    return function (scope, element, attrs) {
        $rootScope.$on('changeWordCount', function (event, word_count) {
            console.log('count');
            angular.element(
                document.getElementById('stats'))
                .replaceWith(word_count);
        });
    };
}]);

//tags
//https://github.com/mbenford/ngTagsInput