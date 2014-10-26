zenNotebook.factory('nanowrimoFactory', ['$rootScope', 'storageFactory', function ($rootScope, storageFactory) {
    return {
        documents: {},
        file: null,
        title: null,
        startDate: null,
        goalDate: null,
        goalWords: null,
        currentDate: null,
        currentWords: null,
        onLoad: function(){
            var file = storageFactory.getStorage('file', 'nanowrimo');
            var chapter= storageFactory.getStorage('chapter', 'nanowrimo');

            if (file) {
                this.loadBook(file);
                storageFactory.setStorage(
                    'content',
                    this.getDaysContent(this.activeDateText(), 'nanowrimo')
                );
            } else {

            }
            return this.getChapterContent(chapter);
        },
        onWrite: function(content){
            var count = this.countWords(content);
            storageFactory.setStorage('content', content, 'nanowrimo');
            storageFactory.setStorage('word_count', count, 'nanowrimo');
        },
        onExit: function () {
            var file = storageFactory.getStorage('file', 'nanowrimo');
            if (file) {
                this.setChapterContent(this.activeDateText());
                this.saveBook(file);
            } else {
                //TODO: Warning of lost data
            }
        },
        addChapter: function(name){
            //TODO: Increment default chapter and check that chapter doesn't exist to get overwritten
            if(!name){
                name = 'Chapter 1';
            }
            this.documents[name] = {
                content: '',
                sort_order: 0,
                word_count: 0
            }
        },
        setChapterContent: function (chapter){
            if (this.getActiveContent().length > 0) {
//                this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['content'] = this.getActiveContent();
//                this.years[parseInt(dates[0])][parseInt(dates[1]) + 1][parseInt(dates[2])]['word_count'] = this.countWords(this.getActiveContent());
            }
        },
        getChapterContent: function (chapter) {
            try {
                return this.documents[chapter]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                storageFactory.setStorage('error', err, 'nanowrimo');
                return '';
            }
        },
        //TODO:Parse before saving
        getActiveContent: function () {
            return storageFactory.getStorage('content', 'nanowrimo')
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
        getSidebar: function(){
            return {
                word_count: this.countWords(this.getActiveContent())
            };
        },
        getMenu: function(){
            return [
                {title: 'NanoWrimo', action: 'nanowrimo', class: 'icon-calendar', sub: 'left'}
            ];
        },
        saveBook: function (filename) {
            var book;
            this.file = filename;
            this.setChapterContent(this.activeDateText());
            book = JSON.stringify(this);
            try {
                fs.writeFileSync(filename, book);
                storageFactory.setStorage('file', this.file, 'nanowrimo');
            } catch (err) {
                //console.log(err);
                storageFactory.setStorage('error', err, 'nanowrimo');
                storageFactory.setStorage('recovery', book, 'nanowrimo');
            }
        },
        loadBook: function (file) {
            var data = fs.readFileSync(file);
            tempBook = JSON.parse(data);
            this.file = file;
            storageFactory.setStorage('file', this.file, 'nanowrimo');
            this.documents = tempBook.documents;
        }
    }
}]);