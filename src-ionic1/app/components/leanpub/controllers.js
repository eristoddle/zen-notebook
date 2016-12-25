zenNotebook.controller('leanpubController', ['$scope', '$rootScope', 'leanpubFactory', 'fileDialog', function ($scope, $rootScope, leanpubFactory, fileDialog) {
    $scope.chapters = leanpubFactory.documents;
    $scope.buttons = [
        {title: 'Open Book', class: 'open', action: 'open'}
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
//        var stats = leanpubFactory.getSidebar();
//        for (var key in stats) {
//            $scope.left[key] = stats[key];
//        }
    });

    $scope.action = function (button) {
        if (button.action == 'open') {
            fileDialog.openDir(
                function (dir) {
                    leanpubFactory.loadBook(dir);
                },
                false,
                '.json'
            );
        }
    };
    $scope.createChapter = function () {
        var chapter = leanpubFactory.createChapter();
        leanpubFactory.currentChapter = chapter;
        $scope.startEditing(chapter);
    };
    $scope.setChapter = function (chapter) {
        $rootScope.$broadcast('changeContent', leanpubFactory.onChangeChapter(leanpubFactory.currentChapter, chapter));
    };
    $scope.startEditing = function (chapter) {
        $scope.setChapter(chapter);
        $scope.chapters[chapter].editing = true;
        $scope.editedChapter = chapter;
    };
    $scope.doneEditing = function (oldChapter, newChapter) {
        leanpubFactory.editChapter(oldChapter, newChapter);
        $scope.editedChapter = null;
        $scope.chapters = leanpubFactory.documents;
    };
}]);
