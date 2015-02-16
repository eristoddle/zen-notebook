zenNotebook.controller('nanowrimoController', ['$scope', '$rootScope', 'nanowrimoFactory', 'fileDialog', function ($scope, $rootScope, nanowrimoFactory, fileDialog) {
    $scope.chapters = nanowrimoFactory.documents;
    $scope.buttons = [
        {title: 'Open Book', class: 'open', action: 'open'},
        {title: 'Save Book', class: 'save', action: 'save'}
    ];
    $scope.editedChapter = null;

    $scope.toggleChapter = function (chapter) {
        if ($scope.isChapterShown(chapter)) {
            $scope.shownChapter = null;
        } else {
            $scope.shownChapter = chapter;
        }
    };

    $scope.isChapterShown = function (chapter) {
        return $scope.shownChapter === chapter;
    };
    $scope.$on('toggleLeft', function () {
//        var stats = nanowrimoFactory.getSidebar();
//        for (var key in stats) {
//            $scope.left[key] = stats[key];
//        }
    });

    $scope.expr = function (button) {
        if (button.action == 'open') {
            fileDialog.openFile(
                function (filename) {
                    nanowrimoFactory.loadBook(filename);
                },
                false,
                '.json'
            );
        }
        if (button.action == 'save') {
            fileDialog.saveAs(
                function (filename) {
                    nanowrimoFactory.saveBook(filename);
                },
                'book.json',
                '.json'
            );
        }
    };
    $scope.createChapter = function () {
        var chapter = nanowrimoFactory.createChapter();
        nanowrimoFactory.currentChapter = chapter;
        $scope.startEditing(chapter);
    };
    $scope.setChapter = function (chapter) {
        $rootScope.$broadcast('changeContent', nanowrimoFactory.onChangeChapter(nanowrimoFactory.currentChapter, chapter));
    };
    $scope.startEditing = function (chapter) {
        $scope.setChapter(chapter);
        $scope.chapters[chapter].editing = true;
        $scope.editedChapter = chapter;
    };
    $scope.doneEditing = function (oldChapter, newChapter) {
        nanowrimoFactory.editChapter(oldChapter, newChapter);
        $scope.editedChapter = null;
        $scope.chapters = nanowrimoFactory.documents;
    };
}]);
