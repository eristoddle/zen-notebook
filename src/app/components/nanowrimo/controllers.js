zenNotebook.controller('NanowrimoController', ['$scope', '$rootScope', 'nanowrimoFactory', 'fileDialog', function ($scope, $rootScope, nanowrimoFactory, fileDialog) {
    $scope.chapters = nanowrimoFactory.documents;
    $scope.buttons = [
        {title: 'Open Book', class: 'open', action: 'open'},
        {title: 'Save Book', class: 'save', action: 'save'}
    ];

    $scope.toggleChapter = function(chapter) {
        if ($scope.isChapterShown(chapter)) {
            $scope.shownChapter = null;
        } else {
            $scope.shownChapter = chapter;
        }
    };

    $scope.isChapterShown = function(chapter) {
        return $scope.shownChapter === chapter;
    };
    $scope.$on('toggleLeft', function () {
//        var stats = nanowrimoFactory.getSidebar();
//        for (var key in stats) {
//            $scope.left[key] = stats[key];
//        }
    });

    $scope.expr = function(button) {
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
    $scope.createChapter = function(){
        nanowrimoFactory.createChapter();
    };
    $scope.editChapter = function(old_title, new_title){
        //nanowrimoFactory.editChapter(old_title, new_title);
    };
    $scope.setChapter = function(chapter){
        nanowrimoFactory.currentChapter = chapter;
    };
}]);
