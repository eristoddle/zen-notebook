zenNotebook.factory('leanpubFactory', ['$rootScope', 'storageFactory', 'fileDialog', function ($rootScope, storageFactory, fileDialog) {
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
        chapterCount: function () {
            var count = 0;
            for (var k in this.documents) if (this.documents.hasOwnProperty(k)) ++count;
            return count;
        },
        onLoad: function () {
            var file = storageFactory.getStorage('file', 'leanpub');
            var chapter = storageFactory.getStorage('chapter', 'leanpub');

            if (file) {
                this.loadBook(file);
            } else {

            }
            if (chapter) {
                this.currentChapter = chapter;
                return this.getChapterContent(chapter);
            }
        },
        onWrite: function (content) {
            var count = this.countWords(content);
            storageFactory.setStorage('content', content, 'leanpub');
            storageFactory.setStorage('word_count', count, 'leanpub');
        },
        onExit: function () {
            var file = storageFactory.getStorage('file', 'leanpub');
            if (file) {
                this.saveBook(file);
            } else {
                //TODO: Create file?
            }
        },
        createChapter: function () {
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
        editChapter: function (old_name, new_name) {
            if (old_name != new_name) {
                this.documents[new_name] = angular.copy(this.documents[old_name]);
                delete(this.documents[old_name]);
                this.documents[new_name].name = new_name;
                this.documents[new_name].old_name = new_name;
            }
            this.documents[new_name].editing = false;
        },
        setChapterContent: function (chapter) {
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
                storageFactory.setStorage('error', err, 'leanpub');
                return '';
            }
        },
        onChangeChapter: function (oldChapter, newChapter) {
            if (oldChapter) {
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
            return storageFactory.getStorage('content', 'leanpub')
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
        getSidebar: function () {
            return {
                word_count: this.countWords(this.getActiveContent())
            };
        },
        getMenu: function () {
            return [
                {title: 'leanpub', action: 'leanpub', class: 'fa fa-book', sub: 'left'}
            ];
        },
        saveBook: function (filename) {

        },
        loadBook: function (dir) {
            var data = fileDialog.readDir(dir),
                book,
                frontmatter,
                backmatter;
            if (data) {
                if(data.indexOf('manuscript') > -1){
                    //TODO: This is not cross platform
                    book = fileDialog.readFile(dir + '/manuscript/Book.txt');
                    this.documents.book = book.split('\n');
                    frontmatter = fileDialog.readFile(dir + '/manuscript/frontmatter.txt');
                    this.documents.frontmatter = frontmatter.split('\n');
                    backmatter = fileDialog.readFile(dir + '/manuscript/backmatter.txt');
                    this.documents.backmatter = backmatter.split('\n');
                    console.log(this.documents);
                    this.file = dir;
                    storageFactory.setStorage('file', dir, 'leanpub');
                }else {
                    storageFactory.deleteStorage('file', 'leanpub');
                }
            } else {
                storageFactory.deleteStorage('file', 'leanpub');
            }
        }
    }
}]);