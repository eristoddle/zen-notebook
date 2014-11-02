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
            var count = this.chapterCount() + 1,
                name = 'Chapter ' + (count);
            this.documents[name] = {
                name: name,
                old_name: name,
                editing: false,
                content: '',
                sort_order: count,
                word_count: 0
            };
            $rootScope.$broadcast('changeContent', this.onChangeChapter(this.currentChapter, name));
            return name;
        },
        editChapter: function(old_name, new_name){
            if(old_name != new_name){
                this.documents[new_name] = angular.copy(this.documents[old_name]);
                delete(this.documents[old_name]);
                this.documents[new_name].name = new_name;
                this.documents[new_name].old_name = new_name;
            }
            this.documents[new_name].editing = false;
            console.log(this.documents);
        },
        setChapterContent: function (chapter){
            if (this.getActiveContent().length > 0) {
                var content = this.getActiveContent();
                this.documents[chapter]['content'] = content;
                this.documents[chapter]['word_count'] = this.countWords(content);
            }
            this.currentChapter = chapter;
        },
        getChapterContent: function (chapter) {
            this.currentChapter = chapter;
            try {
                return this.documents[chapter]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                storageFactory.setStorage('error', err, 'nanowrimo');
                return '';
            }
        },
        onChangeChapter: function(oldChapter, newChapter){
            if(oldChapter) {
                this.setChapterContent(oldChapter);
            }
            if (this.getChapterContent(newChapter)) {
                return this.getChapterContent(newChapter);
            } else {
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
                storageFactory.setStorage('chapter', this.currentChapter, 'nanowrimo');
            } catch (err) {
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