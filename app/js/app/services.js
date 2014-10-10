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
                if (message.action == 'count') {
                    return notebookFactory.countWords(notebookFactory.getActiveContent())
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
                            if(notebookFactory.getDaysContent(date).length > 0){
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