zenNotebook.controller('NanowrimoController', ['$scope', '$rootScope', 'nanowrimoFactory', 'fileDialog', function ($scope, $rootScope, nanowrimoFactory, fileDialog) {
    $scope.groups = [];
    for (var i=0; i<10; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j=0; j<3; j++) {
            $scope.groups[i].items.push(i + '-' + j);
        }
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
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
}]);
