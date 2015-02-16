zenNotebook.controller('notebookController', ['$scope', '$rootScope', 'notebookFactory', 'fileDialog', function ($scope, $rootScope, notebookFactory, fileDialog) {
    $scope.buttons = [
        {title: 'Open Notebook', class: 'open', action: 'open'},
        {title: 'Save Notebook', class: 'save', action: 'save'}
    ];
    $scope.$on('toggleLeft', function () {
        var stats = notebookFactory.getSidebar();
        for (var key in stats) {
            $scope.left[key] = stats[key];
        }
    });
    $scope.expr = function (button) {
        if (button.action == 'open') {
            fileDialog.openFile(
                function (filename) {
                    notebookFactory.loadNotebook(filename);
                },
                false,
                '.json'
            );
        }
        if (button.action == 'save') {
            fileDialog.saveAs(
                function (filename) {
                    notebookFactory.saveNotebook(filename);
                },
                'notebook.json',
                '.json'
            );
        }
    };
}]);