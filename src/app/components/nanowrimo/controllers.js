zenNotebook.controller('NanowrimoController', ['$scope', '$rootScope', 'nanowrimoFactory', 'fileDialog', function ($scope, $rootScope, nanowrimoFactory, fileDialog) {
    $scope.groups = [];
    $scope.buttons = [
        {title: 'Open Book', class: 'open', action: 'open'},
        {title: 'Save Book', class: 'save', action: 'save'}
    ];
    for (var i=0; i<10; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j=0; j<3; j++) {
            $scope.groups[i].items.push(i + '-' + j);
        }
    }

    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
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
}]);
