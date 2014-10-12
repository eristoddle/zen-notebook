zenNotebook.factory('nanowrimoFactory', ['$rootScope', function ($rootScope) {
    return {
        documents: {},
        file: null,
        currentDate: null,
        activeDate: null,
        onLoad: function(){

        },
        onWrite: function(content){

        },
        onExit: function () {

        },
        getContent: function (chapter) {
            dates = dateText.split('-');
            try {
                return this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                window.localStorage && window.localStorage.setItem('error', err);
                return '';
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
        getMonthCount: function(){
            var count = 1000;

            return count;
        },
        getMonthAverage: function(){
            var average = 1000;

            return average;
        },
        getSidebar: function(){
            return {
                word_count: this.countWords(this.getActiveContent()),
                month_average: this.getMonthAverage(),
                month_count: this.getMonthCount()
            };
        },
        getMenu: function(){
            return [
                {title: 'NanoWrimo', action: 'nanowrimo', class: 'icon-calendar', sub: 'left'}
            ];
        },
        saveBook: function (filename) {
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
        loadBook: function (file) {
            var data = fs.readFileSync(file);
            tempJournal = JSON.parse(data);
            this.file = file;
            window.localStorage && window.localStorage.setItem('file', this.file);
        }
    }
}]);