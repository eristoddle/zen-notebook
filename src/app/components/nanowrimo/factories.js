zenNotebook.factory('nanowrimoFactory', ['$rootScope', 'storageFactory', 'fileDialog', function ($rootScope, storageFactory, fileDialog) {
    return {
        documents: {},
        file: null,
        title: null,
        currentChapter: null,
        startDate: null,
        goalDate: null,
        goalWords: null,
        currentDate: null,
        currentWords: null,
        chapterCount: function(){
            var count = 0;
            for (var k in this.documents) if (this.documents.hasOwnProperty(k)) ++count;
            return count;
        },
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
            if (chapter){
                this.currentChapter = chapter;
                return this.getChapterContent(chapter);
            }
        },
        onWrite: function(content){
            var count = this.countWords(content);
            storageFactory.setStorage('content', content, 'nanowrimo');
            storageFactory.setStorage('word_count', count, 'nanowrimo');
        },
        onExit: function () {
            var file = storageFactory.getStorage('file', 'nanowrimo');
            if (file) {
                this.setChapterContent(this.currentChapter);
                this.saveBook(file);
            } else {
                //TODO: Create file?
            }
        },
        createChapter: function(){
            var name = 'Chapter ' + (this.chapterCount() + 1);
            this.documents[name] = {
                name: name,
                content: '',
                sort_order: 0,
                word_count: 0
            };
            console.log(this.documents);
        },
        editChapter: function(old_name, new_name){
            this.documents[new_name] = this.documents[old_name];
            delete(this.documents[old_name]);
            console.log(this.documents);
        },
        setChapterContent: function (chapter){
            if (this.getActiveContent().length > 0) {
                this.documents[chapter]['content'] = this.getActiveContent();
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
                fileDialog.writeFile(filename, book);
                storageFactory.setStorage('file', this.file, 'nanowrimo');
            } catch (err) {
                //console.log(err);
                storageFactory.setStorage('error', err, 'nanowrimo');
                storageFactory.setStorage('recovery', book, 'nanowrimo');
            }
        },
        loadBook: function (file) {
            var data = fileDialog.readFile(file);
            tempBook = JSON.parse(data);
            this.file = file;
            storageFactory.setStorage('file', this.file, 'nanowrimo');
            this.documents = tempBook.documents;
        }
    }
}]);