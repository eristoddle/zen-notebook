zenNotebook.factory('menuFactory', ['$rootScope', '$injector', function ($rootScope, $injector) {
    var app_nav = [
        {title: 'Theme', action: 'theme', class: 'fa fa-adjust', sub: 'body'},
        {title: 'Settings', action: 'settings', class: 'fa fa-gears', sub: 'body'},
        {title: 'Zen Notebook', action: 'remote', class: 'fa fa-cloud-upload', sub: 'body'},
        {title: 'About', action: 'about', class: 'fa fa-question', sub: 'body'},
        {title: 'Minimize', action: 'minimize', class: 'fa fa-arrow-down', sub: 'nw'},
        {title: 'Maximize', action: 'maximize', class: 'fa fa-arrows-alt', sub: 'nw'},
        {title: 'Exit', action: 'exit', class: 'fa fa-power-off', sub: 'nw'}
    ];

    var menus = {
        message: null,
        menus: null,
        factory: null,
        loadComponent: function () {
            this.factory = $injector.get($rootScope.active_component + 'Factory');
            var component_nav = this.factory.getMenu();
            this.menus = {
                nav: component_nav.concat(app_nav)
            }
        },
        publishClick: function (message) {
            this.message = message;
            if (message.sub == 'left') {
                $rootScope.$broadcast('toggleLeft');
            }
            if (message.sub == 'foot') {
                $rootScope.$broadcast('toggleFoot');
            }
            if (message.sub == 'body') {
                $rootScope.$broadcast('body');
            }
            if (message.sub == 'nw') {
                if (message.action == 'maximize') {
                    win.toggleFullscreen();
                }
                if (message.action == 'minimize') {
                    win.minimize();
                }
                if (message.action == 'exit') {
                    this.factory.onExit();
                    win.close();
                }
            }
        },
        subscribeClick: function () {
            var message = this.message;
            this.message = null;
            return message;
        }
    };

    menus.loadComponent();

    return menus;
}]);